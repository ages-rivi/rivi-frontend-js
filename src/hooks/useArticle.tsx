import { useContext } from 'react';
import { ArticleContext, type ArticleProps } from '../contexts/ArticleContext';

const useArticle = (): ArticleProps => {
  return useContext(ArticleContext);
};

export default useArticle;
