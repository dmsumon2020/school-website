type RichTextBlock = {
  type: string;
  children: {
    text: string;
    type?: string;
  }[];
};

export type HeadmasterMessage = {
  title: string;
  message: RichTextBlock[];
  headmasterName: string;
  image: { url: string }[];
};
