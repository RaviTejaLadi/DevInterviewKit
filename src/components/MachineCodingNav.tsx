import { machineCodingExamplesData } from '@/data/Frontend/react-machine-coding/examples';
import { LinkBar } from 'kalki-ui';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const MachineCodingNav = () => {
  const location = useLocation();
  const [activeUrl, setActiveUrl] = useState(location.pathname);

  const handleUrlChange = (to: string) => {
    setActiveUrl(to);
  };

  interface Link {
    label: string;
    to: string;
    icon?: string;
  }

  // Generate links dynamically from your data
  const links: Link[] = machineCodingExamplesData.map((example) => ({
    label: example.title,
    to: example.id,
  }));

  return (
    <LinkBar
      variant="default"
      size="sm"
      rounded="none"
      activeUrl={activeUrl}
      onUrlChange={handleUrlChange}
      className="w-full fixed z-50"
    >
      <LinkBar.Control position="left" />

      <LinkBar.Content className="px-2">
        {links.map((link, index) => (
          <LinkBar.Link key={index} to={`/machine-coding/${link.to}`} icon={link.icon}>
            {link.label}
          </LinkBar.Link>
        ))}
      </LinkBar.Content>

      <LinkBar.Control position="right" />
    </LinkBar>
  );
};

export default MachineCodingNav;
