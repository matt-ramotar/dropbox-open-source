import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from 'components/Container';
import NextLink from 'next/link';
import styled from 'styled-components';
import { media } from 'utils/media';


type SingleFooterListItem = { title: string; href: string };
type FooterListItems = SingleFooterListItem[];
type SingleFooterList = { title: string; items: FooterListItems };
type FooterItems = SingleFooterList[];

const footerItems: FooterItems = [
  {
    title: 'Dropbox',
    items: [
      { title: 'Desktop app', href: 'https://www.dropbox.com/install' },
      { title: 'Mobile app', href: 'https://www.dropbox.com/mobile?trigger=on' },
      { title: 'Integrations', href: 'https://www.dropbox.com/app-integrations' },
      { title: 'Features', href: 'https://www.dropbox.com/features' },
      { title: 'Solutions', href: 'https://www.dropbox.com/business/solutions' },
      { title: 'Do more than store', href: 'https://experience.dropbox.com/' },
      { title: 'Security', href: 'https://www.dropbox.com/features/security' },
      { title: 'Advance access', href: 'https://www.dropbox.com/advance-access' },
    ],
  },


  {
    title: 'Tech',
    items: [
      { title: 'Blog', href: 'https://blogs.dropbox.com/tech/' },
      { title: 'Developers', href: 'https://blogs.dropbox.com/developers/' },
      { title: 'Contributor License Agreement', href: '/cla' },
      { title: 'Code of Conduct', href: '/coc' },
    ],
  },
  {
    title: 'Social',
    items: [
      { title: 'GitHub', href: 'https://github.com/Dropbox' },
      { title: 'Medium', href: 'https://medium.com/@Dropbox' },
      { title: 'Twitter', href: 'https://twitter.com/Dropbox' },
      { title: 'Instagram', href: 'https://www.instagram.com/dropbox' },
      { title: 'YouTube', href: 'https://www.youtube.com/user/dropbox' },
      { title: 'Facebook', href: 'https://www.facebook.com/Dropbox' },
      { title: 'LinkedIn', href: 'https://www.linkedin.com/company/Dropbox' },
    ],
  },
  {
    title: 'Company',
    items: [
      { title: 'About us', href: 'https://www.dropbox.com/about' },
      { title: 'Jobs', href: 'https://www.dropbox.com/jobs' },
      { title: 'Engineering Career Frameworks', href: 'https://dropbox.tech/infrastructure/sharing-our-engineering-career-framework-with-the-world' }
    ],
  },
];

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ListContainer>
          {footerItems.map((singleItem) => (
            <FooterList key={singleItem.title} {...singleItem} />
          ))}
        </ListContainer>
        <BottomBar>
          <ShareBar>
            <NextLink href="https://www.twitter.com/DropboxOSS" passHref>
              <a>
                <FontAwesomeIcon icon={faTwitter} size="3x" />
              </a>
            </NextLink>

            <NextLink href="https://www.github.com/Dropbox" passHref>
              <a>
                <FontAwesomeIcon icon={faGithub} size="3x" />
              </a>
            </NextLink>
          </ShareBar>
          <Copyright>&copy; Copyright 2022 Dropbox</Copyright>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
}

function FooterList({ title, items }: SingleFooterList) {
  return (
    <ListWrapper>
      <ListHeader>{title}</ListHeader>
      {items.map((singleItem) => (
        <ListItem key={singleItem.href} {...singleItem} />
      ))}
    </ListWrapper>
  );
}

function ListItem({ title, href }: SingleFooterListItem) {
  return (
    <ListItemWrapper>
      <NextLink href={href} passHref>
        <a>{title}</a>
      </NextLink>
    </ListItemWrapper>
  );
}

const FooterWrapper = styled.div`
  padding-top: 10rem;
  padding-bottom: 4rem;
  background: rgb(var(--secondary));
  color: rgb(var(--textSecondary));
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ListHeader = styled.p`
  font-weight: bold;
  font-size: 2.25rem;
  margin-bottom: 2.5rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;
  margin-right: 5rem;

  & > *:not(:first-child) {
    margin-top: 1rem;
  }

  ${media('<=tablet')} {
    flex: 0 40%;
    margin-right: 1.5rem;
  }

  ${media('<=phone')} {
    flex: 0 100%;
    margin-right: 0rem;
  }
`;

const ListItemWrapper = styled.p`
  font-size: 1.6rem;

  a {
    text-decoration: none;
    color: rgba(var(--textSecondary), 0.75);
  }
`;

const ShareBar = styled.div`
  & > *:not(:first-child) {
    margin-left: 1rem;
  }
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
`;

const BottomBar = styled.div`
  margin-top: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media('<=tablet')} {
    flex-direction: column;
  }
`;
