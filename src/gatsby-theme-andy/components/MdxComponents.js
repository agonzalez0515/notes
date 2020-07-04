import React from 'react';
import { LinkToStacked } from 'react-stacked-pages-hook';
import Tippy from '../../../node_modules/gatsby-theme-andy/src/components/Tippy';

const AnchorTag = ({ href, popups = {}, ...restProps }) => {
  href = href || restProps.to;

  if (!href.match(/^http/)) {
    const Popup = popups[href.replace(/^\/notes\//, '')];

    return (
      <Tippy content={Popup} placement="right" animation="shift-away">
        <LinkToStacked {...restProps} to={href} className="excerpt" />
      </Tippy>
    );
  }
  return <a {...restProps} href={href} />;
};

export default {
  a: AnchorTag,
};
