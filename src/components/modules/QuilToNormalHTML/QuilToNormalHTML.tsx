"use client";

type QuilToNormalHTMLProps = {
  content: string;
  maxLength?: number;
};

const QuilToNormalHTML = ({ content, maxLength }: QuilToNormalHTMLProps) => {
  const shortenedContent = maxLength
    ? content.substring(0, maxLength) + "..."
    : content;

  return <p dangerouslySetInnerHTML={{ __html: shortenedContent }} />;
};

export default QuilToNormalHTML;
