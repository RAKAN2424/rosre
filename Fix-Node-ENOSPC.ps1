# --- Fix-Node-ENOSPC.ps1 ---
Param(
  [string]$ProjectPath = "C:\Users\DELL\source\repos\rosre"
)

Write-Host "⏳ تشيك مساحة الأقراص..."
Get-PSDrive -PSProvider FileSystem | Select-Object Name,Free,Used,Root | Format-Table

# اختَر درايف بديل فيه مساحة (غير C:)
$alt = Get-PSDrive -PSProvider FileSystem |
  Where-Object { $_.Name -ne 'C' -and $_.Free -gt 5GB } |
  Sort-Object Free -Descending | Select-Object -First 1

if ($alt) {
  $CacheDir = Join-Path ($alt.Root) "npm-cache"
  $PrefixDir = Join-Path ($alt.Root) "npm-global"
  $TempDir = Join-Path ($alt.Root) "Temp"
  New-Item -ItemType Directory -Force -Path $CacheDir, $PrefixDir, $TempDir | Out-Null

  Write-Host "🔧 تحويل كاش npm والبنارات للدرايف $($alt.Name):"
  npm config set cache "$CacheDir" --global
  npm config set prefix "$PrefixDir" --global

  # ضيف الـ PATH للمستخدم
  $userPath = [Environment]::GetEnvironmentVariable("Path","User")
  if ($userPath -notlike "*$PrefixDir*") {
    [Environment]::SetEnvironmentVariable("Path", $userPath + ";" + $PrefixDir + ";" + (Join-Path $PrefixDir "bin"), "User")
  }

  # (اختياري) حوّل TEMP/TMP للمساحة الواسعة
  [Environment]::SetEnvironmentVariable("TEMP", $TempDir, "User")
  [Environment]::SetEnvironmentVariable("TMP",  $TempDir, "User")
  Write-Host "✅ تم تحويل المسارات."
} else {
  Write-Host "ℹ️ مفيش درايف بديل واسع. هننضّف على C: قدر الإمكان."
}

# اقفل أي node شغّال
Write-Host "🧹 قتل عمليات node (لو موجودة)..."
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue

# امسح كاش npm القديم مباشرة (أسرع من npm cache clean لما المساحة صفر)
$oldCache = Join-Path $env:LocalAppData "npm-cache"
if (Test-Path $oldCache) {
  Write-Host "🗑️ حذف $oldCache ..."
  Remove-Item $oldCache -Recurse -Force -ErrorAction SilentlyContinue
}

# نظّف TEMP
Write-Host "🧺 تنظيف TEMP..."
Get-ChildItem $env:TEMP -Force -Recurse -ErrorAction SilentlyContinue | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue

# امسح node_modules في مشروعك (هتسطّبه تاني)
if (Test-Path $ProjectPath) {
  $nm = Join-Path $ProjectPath "node_modules"
  if (Test-Path $nm) {
    Write-Host "🗑️ حذف $nm ..."
    Remove-Item $nm -Recurse -Force -ErrorAction SilentlyContinue
  }
  $pl = Join-Path $ProjectPath "package-lock.json"
  if (Test-Path $pl) {
    Remove-Item $pl -Force -ErrorAction SilentlyContinue
  }
}

# تقرير سريع بعد التنظيف
Write-Host "📊 المساحة بعد التنظيف:"
Get-PSDrive -PSProvider FileSystem | Select-Object Name,Free,Used,Root | Format-Table

Write-Host "`n✅ خلّصنا. اقفل الـ Terminal وافتحه تاني."
Write-Host "بعدها من داخل مشروعك:
  npm install --no-audit --fund=false
  npm install @imagekit/nodejs --no-audit --fund=false"
