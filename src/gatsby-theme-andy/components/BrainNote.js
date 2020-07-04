import React from 'react';
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer';
import { MDXProvider } from '@mdx-js/react';

import components from './MdxComponents';
import Popover from './Popover';
import ReferredBlock from '../../../node_modules/gatsby-theme-andy/src/components/ReferredBlock';

const BrainNote = ({ note }) => {
  note.inboundReferenceNotes = note.inboundReferenceNotes || [];
  note.outboundReferenceNotes = note.outboundReferenceNotes || [];

  const popups = {};
  note.outboundReferenceNotes
    .filter((reference) => !!reference.childMdx.excerpt)
    .forEach((ln, i) => {
      popups[ln.slug] = <Popover reference={ln} />;
    });

  const AnchorTagWithPopups = (props) => <components.a {...props} popups={popups} />;

  return (
    <MDXProvider components={{ a: AnchorTagWithPopups }}>
      <div id="note">
        <div>
          <MDXRenderer>{note.childMdx.body}</MDXRenderer>
        </div>
        <ReferredBlock references={note.inboundReferenceNotes} />
      </div>
    </MDXProvider>
  );
};

export default BrainNote;