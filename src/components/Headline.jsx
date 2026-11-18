import { Fragment } from 'react';

/** House style for display headlines: a year is set in Newsreader Italic. The words stay as published. */
export default function Headline({ children }) {
    const parts = String(children || '').split(/\b((?:1[5-9]|20)\d{2})\b/);
    return parts.map((part, index) => (index % 2 ? <em key={index}>{part}</em> : <Fragment key={index}>{part}</Fragment>));
}
