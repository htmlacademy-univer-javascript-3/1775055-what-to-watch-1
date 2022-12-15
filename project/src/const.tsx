export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  FilmDetails = '/films/:id/details',
  FilmReviews = '/films/:id/reviews',
  AddReview = '/films/:id/review',
  Player = 'player/:id',
  NotFound = '*'
}

export enum AuthStatus {
  Auth = 'AUTH',
  NotAuth = 'NOT_AUTH',
  Unknown = 'UNKNOWN'
}

export enum APIRoute {
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  Promo = '/promo',
  MyList = '/favorite'
}

export enum NameSpace {
  Data = 'DATA',
  Film = 'FILM',
  User = 'USER',
  FilmList= 'FILM_LIST'
}
