import { FC, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { projects, Project, generateWhatsappUrl } from '@/lib/data';
import { useTranslation } from '@/hooks/useTranslation';

const Lightbox = dynamic(() => import('@/components/Lightbox'), { ssr: false });

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: FC<ProjectPageProps> = ({ project }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const handleBookNow = () => {
    const url = generateWhatsappUrl({ projectTitle: project.title });
    window.open(url, '_blank');
  };
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Head>
        <title>{project.title} | SIGHT Real Estate</title>
        <meta name="description" content={project.description} />
      </Head>
      <div className="container">
        <div className="glass-panel-wrapper">
          <section className="project-details">
            <h2 className="section-title">{project.title}</h2>
            <p className="project-subtitle">{project.subtitle}</p>
            <div className="project-grid">
              <div className="project-main">
                <Image
                  src={project.heroImage}
                  alt={`${project.title} Hero`}
                  width={800}
                  height={500}
                  className="project-hero-img"
                  priority
                />
                <p className="project-description">{project.description}</p>
                <h3 dangerouslySetInnerHTML={{ __html: t('highlights') }} />
                <ul>
                  {project.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <h3 dangerouslySetInnerHTML={{ __html: t('gallery') }} />
                <div className="project-gallery-grid">
                  {project.gallery.map((imgSrc, i) => (
                    <div key={i} className="gallery-image-container" onClick={() => setLightboxIndex(i)}>
                      <Image
                        src={imgSrc}
                        alt={`${project.title} Gallery Image ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 150px"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  ))}
                </div>
                {project.virtualTourUrl && (
                  <a
                    href={project.virtualTourUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn"
                    style={{ marginTop: '1rem' }}
                    dangerouslySetInnerHTML={{ __html: t('virtualTour') }}
                  />
                )}
              </div>
              <aside className="project-sidebar">
                <div className="info-box">
                  <h4 dangerouslySetInnerHTML={{ __html: t('paymentPlan') }} />
                  <dl>
                    {project.paymentPlan.map((item, i) => (
                      <div className="payment-item" key={i}>
                        <dt>{item.label}</dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className="info-box">
                  <h4 dangerouslySetInnerHTML={{ __html: t('prices') }} />
                  <table>
                    <thead>
                      <tr>
                        <th dangerouslySetInnerHTML={{ __html: t('unit') }} />
                        <th dangerouslySetInnerHTML={{ __html: t('area') }} />
                        <th dangerouslySetInnerHTML={{ __html: t('price') }} />
                      </tr>
                    </thead>
                    <tbody>
                      {project.prices.map((item, i) => (
                        <tr key={i}>
                          <td>{item.unit}</td>
                          <td>{item.area}</td>
                          <td>{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <button
                  className="btn book"
                  onClick={handleBookNow}
                  dangerouslySetInnerHTML={{ __html: t('bookNow') }}
                />
                <Link href="/" className="btn outline btn-home" dangerouslySetInnerHTML={{ __html: t('backToHome') }} />
              </aside>
            </div>
          </section>
        </div>
      </div>
      {lightboxIndex !== null && (
        <Lightbox
          images={project.gallery}
          startIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((p) => ({
    params: { slug: p.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const project = projects.find((p) => p.slug === params?.slug);
  if (!project) {
    return { notFound: true };
  }
  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;