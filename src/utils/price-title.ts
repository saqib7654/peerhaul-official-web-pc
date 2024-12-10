export const priceTitle = (listing: string, status: string) => {
  if (listing === '1') {
    // return 'Express Delivery Cost';
    return 'Express';
  }
  switch (status) {
    case 'NEW':
      return 'Est. Rate';
    case 'BID':
      return 'Best Bid';
    default:
      return 'Price';
  }
};
