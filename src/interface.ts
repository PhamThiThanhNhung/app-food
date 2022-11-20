interface Star {
  countFiveStar: number;
  countFourStar: number;
  countThreeStar: number;
  countTwoStar: number;
  countOneStar: number;
}

export interface ProductType {
  id: string | number;
  name: string;
  description: string;
  price: number | string;
  deal: number | string;
  countLike: number;
  star: Star;
  Acount: number;
  image: string;
  category: number;
}
