interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostDeleteResponse {
  id: number;
}

interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

interface ICommentDeleteResponse {
  id: number;
}

interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}
