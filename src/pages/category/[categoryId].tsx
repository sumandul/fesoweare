import React, { useEffect, useMemo, useState } from "react";
import { HiOutlineX } from "react-icons/hi";
import { useRouter } from "next/router";
import PaginationComponent from "../../componets/section/resuable/pagination";
import Loader from "../../helper/loader";
import { filterApi } from "../../api/filter";
import Listing from "../../componets/section/product/listing";
import Filter from "../../componets/section/filter/filter";
import Head from "next/head";

const CategoryProduct = () => {
  const [current, setCurrent] = useState(3);
  const [loading, setLoading] = useState(true);
  const handlePagination = (page: any) => {
    setCurrent(page);
  };

  const router = useRouter();
  const categoryId = router.query.categoryId;

  const initialState = {
    categoryId: router.query.categoryId,
    skip: 0,
    limit: 10,
    filterParams: [],
    category: null,
  };
  const [isGrid, setIsGrid] = useState(false);
  const [allProducts, setAllProducts] = useState<[]>([]);
  const [brands, setBrands] = useState<[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [price, setPrice] = useState({
    lowerPrice: 0,
    higherPrice: 0,
  });

  const [query, setQuery] = useState<any>(initialState);

  const fetchProduct = async () => {
    setLoading(true);
    setTimeout(async () => {
      let queryArray: any = [];
      console.log(queryArray, "array");

      if (!query?.category) {
        queryArray.push(`filter[where][category_id]=${categoryId}`);
      }

      if (price?.lowerPrice && !price?.higherPrice) {
        queryArray.push(`filter[where][salePrice][gt]=${price.lowerPrice}`);
      }

      if (price?.higherPrice && !price?.lowerPrice) {
        queryArray.push(`filter[where][salePrice][lt]=${price.higherPrice}`);
      }

      if (price?.lowerPrice > 0 && price?.higherPrice > 0) {
        queryArray.push(
          `filter[where][salePrice][between][0]=${price.lowerPrice}&filter[where][salePrice][between][1]=${price.higherPrice}`
        );
      }

      if (query?.category) {
        queryArray.push(`filter[where][category_id]=${query.category}`);
      }

      if (query?.brand) {
        queryArray.push(`filter[where][brand_id]=${query.brand}`);
      }
      queryArray.push(
        `filter[limit]=${query?.limit}&filter[skip]=${query?.skip}`
      );

      queryArray?.length > 0 &&
        categoryId &&
        filterApi(queryArray.join("&"))
          .then((resp) => {
            console.log(resp, "hello");
            setAllProducts(resp?.data?.products || []);
            setTotalCount(resp?.data?.totalCount);
            setLoading(false);
          })
          .catch((res) => {
            setLoading(false);
          });
    }, 1000);
  };

  useEffect(() => {
    fetchProduct();
  }, [query?.category, query, router.query.categoryId, price]);

  useEffect(() => {
    if (router.query.categoryId) {
      filterApi(
        `filter[where][category_id]=${router.query.categoryId}&filter[limit]=1&filter[skip]=0`
      ).then((resp) => {
        setBrands(resp?.data?.brands);
      });
    }
  }, [router.query.categoryId]);

  const productView = (boolen: any) => {
    setIsGrid(boolen);
  };

  // console.log(
  //   allProducts.map((data) => console.log(data)),
  //   "all"
  // );
  const title: any = useMemo(() => {
    return allProducts.find((car, i) => i === 0);
  }, [allProducts]);

  return (
    <>
      <Head>
        <title>{title?.category?.name}</title>
        <meta name="description" content=" page about product categories" />
      </Head>
      <div className=" container mx-auto">
        <div className=" py-10">
          <div className=" flex gap-10">
            <div className="  basis-[20%]">
              <div>
                <div className="py-3">
                  <h4 className=" text-[15px] font-[400]">Product Filter</h4>
                </div>
                <Filter
                  query={query}
                  setQuery={setQuery}
                  brand={brands}
                  setPrice={setPrice}
                  price={price}
                />
              </div>
              <div className="mt-5">
                <img src="../assets/uu.png" alt="" />
              </div>
            </div>
            <div className=" basis-[80%]">
              <div className=" flex justify-between">
                <div>
                  <span className=" text-[14px] font-[400] text-black-700">
                    {allProducts.length} products
                  </span>
                </div>
                <div className=" flex justify-start gap-10">
                  <div className=" ">
                    <div className=" flex  items-center">
                      <div>
                        <span className=" text-[13px] pr-5 text-black-700 font-[400] w-full">
                          Sort by :
                        </span>{" "}
                      </div>
                      <div>
                        <select
                          name=""
                          id=""
                          className=" text-[14px] font-[300] text-black-700  px-10 py-2 bg-white-850 w-full"
                        >
                          <option value="">BestMatch</option>
                          <option value="">Price low to high </option>
                          <option value="">High to low</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className=" flex gap-5  items-center">
                    <div>
                      <span className=" text-[13px] pr-5 text-black-700 font-[400] w-full">
                        Sort by :
                      </span>{" "}
                    </div>
                    <div>
                      <select
                        name=""
                        id=""
                        className=" text-[14px] font-[300] text-black-700   bg-white-850  px-2 py-2"
                      >
                        <option value="">16</option>
                        <option value="">24</option>
                        <option value="">40</option>
                      </select>
                    </div>
                    <div>
                      <div className=" flex  gap-4">
                        <img
                          src={`${
                            isGrid ? "../assets/g2.png" : "../assets/g3.png"
                          }`}
                          alt=""
                          onClick={() => productView(false)}
                        />
                        <img
                          src="../assets/g3.png"
                          alt=""
                          onClick={() => productView(true)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" mt-3 flex gap-5">
                <div className=" flex justify-between items-center rounded-[5px] py-1  px-2 bg-blue-1000 text-white-200">
                  Filter <HiOutlineX />
                </div>
                <div className=" flex justify-between items-center rounded-[5px] px-2 py-1  bg-blue-1000 text-white-200">
                  electronics <HiOutlineX />
                </div>
                <div>
                  <span className=" underline font-[300] text-[14px] text-black-700 opacity-[0.5]">
                    clear
                  </span>
                </div>
              </div>
              {loading ? (
                <div className=" py-20 flex justify-center items-center">
                  <Loader />
                </div>
              ) : (
                <Listing isGrid={isGrid} catProduct={allProducts} />
              )}
              {allProducts?.length > 0 ? (
                <div className=" my-10 flex justify-end">
                  <PaginationComponent
                    onChange={handlePagination}
                    current={current}
                    total={totalCount}
                    setQuery={setQuery}
                    query={query}
                  />
                </div>
              ) : (
                <div className=" text-[20px] font-[500] flex justify-center items-center py-20 ">
                  No product
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryProduct;
