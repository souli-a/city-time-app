import { useEffect } from 'react';

const useDocumentTitle = ({
  title,
  dependencies,
}: {
  title: string;
  dependencies: string[];
}) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title, dependencies]);

  return null;
};

export default useDocumentTitle;
