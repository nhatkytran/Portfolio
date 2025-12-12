import { cvCopy } from '../../data';

import LinkCV from '@/shared/components/LinkCV';
import ScrollToTop from '@/shared/components/ScrollToTop';

/** Utility component. */
export default function Utility() {
  return (
    <>
      <LinkCV title={cvCopy.title} />
      <ScrollToTop />
    </>
  );
}
