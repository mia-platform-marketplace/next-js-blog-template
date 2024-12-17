export type Author = {
  _id: string;
  firstName: string;
  lastName: string;
  coverImage: {
    name: string;
    file: string;
    size: number;
    location: string;
  };
};
