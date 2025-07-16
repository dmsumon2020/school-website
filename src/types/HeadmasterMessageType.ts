type RichTextBlock = {
  type: string;
  children: {
    text: string;
    type?: string;
  }[];
};

export type HeadmasterMessageType = {
  title: string;
  message: RichTextBlock[];
  headmasterName: string;
  image: { url: string }[];
};
