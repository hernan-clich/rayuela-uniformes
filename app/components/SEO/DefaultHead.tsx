import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { baseUrl } from '~constants/general';

function DefaultHead() {
  const { asPath } = useRouter();

  return (
    <DefaultSeo
      title="Rayuela Uniformes Escolares"
      description="Compra los uniformes escolares de la mejor calidad en la Ciudad de Buenos Aires."
      canonical={`${baseUrl}${asPath}`}
      openGraph={{
        type: 'website',
        title: 'Rayuela Uniformes Escolares',
        description:
          'Compra los uniformes escolares de la mejor calidad en la Ciudad de Buenos Aires.',
        url: `${baseUrl}${asPath}`,
        images: [
          {
            url: '/favicons/apple-touch-icon.png',
            height: 180,
            width: 180,
            alt: 'Rayuela Logo'
          }
        ]
      }}
      additionalLinkTags={[
        {
          rel: 'icon',
          sizes: '32x32',
          href: '/favicons/favicon-32x32.png'
        },
        {
          rel: 'icon',
          sizes: '16x16',
          href: '/favicons/favicon-16x16.png'
        },
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/favicons/apple-touch-icon.png'
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest'
        },
        {
          rel: 'mask-icon',
          color: '#4e7cb6',
          href: '/favicons/safari-pinned-tab.svg'
        }
      ]}
      additionalMetaTags={[
        {
          name: 'msapplication-TileColor',
          content: '#2b5797'
        },
        {
          name: 'theme-color',
          content: '#ffffff'
        }
      ]}
    />
  );
}

export default DefaultHead;
