export interface SingleProduct {
	id:          number;
	title:       string;
	price:       number;
	description: string;
	category:    string;
	image:       string;
	rating:      Rating;
	inWishList:  boolean;
}

export interface Rating {
	rate:  number;
	count: number;
}