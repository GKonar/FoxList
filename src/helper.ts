import { IProduct, IProductsObject, IVegsArrays } from "./interfaces/products/products.interfaces";

export const getArrayByInputValue = (
  inputValue: string,
  productsObject: IProductsObject,
  language: string) => 
{
  const firstInputLetter: string = inputValue.charAt(0).toUpperCase();
  const firstLetterArray: IProduct[] = productsObject[language as keyof IProductsObject][firstInputLetter as keyof IVegsArrays];
  const filteredArray = firstLetterArray?.filter(
    (p: IProduct) =>
      p.name.toLowerCase().includes(inputValue.toLowerCase()) &&
      p.name[0] === inputValue[0]?.toLowerCase(),
  );

  return filteredArray
}