import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import useScreen from '@/hooks/useScreen';
import Button from '@/ui/Button';
// eslint-disable-next-line import/no-unresolved
import Cross from '@/static/icons/cross';
import useTheme from '@/hooks/useTheme';
import OpenCaseContent from './OpenCaseContent';
import OpenCaseSwiper from './OpenCaseSwiper';
import CareerContentStyled from './styled';

const OpenCaseContainer = ({ contentForCase, pageContent }) => {
  const { isLight } = useTheme();
  const { isMobile, isTablet } = useScreen();

  const router = useRouter();
  const pageId = router.query.id;

  const slideIndex = contentForCase.map(({ slug }, i) => slug === pageId && i).filter(Boolean)[0];
  const initialSlide = slideIndex === undefined ? 0 : slideIndex;

  return (
    <CareerContentStyled isLight={isLight}>
      <div className="open-case__close">
        <Button
          buttonIcon
          className="open-case__close-button"
          onClick={() => {
            router.push('/competencies');
          }}
        >
          <Cross classnames="open-case__close-button--icon" color={isLight ? '#5B5B5B' : '#fff'} />
        </Button>
      </div>
      <OpenCaseContent
        contentForCase={contentForCase}
        pageContent={pageContent}
        iconHeader={{ pageId, initialSlide }}
      />
      {!isMobile && (
        <OpenCaseSwiper
          contentForCase={contentForCase}
          id="open-case-vertical"
          slidesPerView={isTablet ? 5 : 3}
          direction="vertical"
        />
      )}
    </CareerContentStyled>
  );
};

OpenCaseContainer.propTypes = {
  pageContent: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string,
      frameworks: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          type: PropTypes.string,
        }),
      ),
      id: PropTypes.number,
      name: PropTypes.string,
      status: PropTypes.string,
    }),
  ).isRequired,
  contentForCase: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      name: PropTypes.string,
    }),
  ).isRequired,
};

OpenCaseContainer.defaultProps = {};

export default OpenCaseContainer;
