export type IComments = {
  [index: number]: string | IComments;
  length: number;
  map: (callback: (comment: IComment) => JSX.Element) => JSX.Element[];
};

export type IComment = {
  comment: object;
  id: string;
  snippet: {
    topLevelComment: {
      snippet: {
        textDisplay: string;
        authorDisplayName: string;
        authorProfileImageUrl: string;
      };
    };
  };
};
