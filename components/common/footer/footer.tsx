import * as React from "react";

export function Footer() {
  return (
    <div>
      <footer className="footer ">
        <div className="flex flex-wrap container m-auto px-3">
          <div className="w-full md:w-5/12">
            <div>
              <h2 className="mb-6 text-sm font-semibold ">Địa chỉ</h2>
              <ul className="text-gray-300">
                <div className="flex">
                  <li className="mb-4 flex items-start flex-wrap w-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      className=" h-6 pr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>{" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <div className="w-4/5">
                      <a href="#" className=" hover:underline ">
                        Hà Nội
                      </a>
                      <p>
                        Tầng 8 tòa nhà Ford, 311 - 313 Trường Chinh, quận Thanh
                        Xuân, Hà Nội
                      </p>
                    </div>
                  </li>
                  <li className="mb-4 flex items-start flex-wrap w-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      className=" h-6 pr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>{" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <div className="w-4/5">
                      <a href="#" className=" hover:underline ">
                      Thanh Hóa
                      </a>
                      <p>
                      Lô số MG 202, Khu đô thị Vincom, 27 Trần Phú, Phường Điện Biên, TP Thanh Hóa
                      </p>
                    </div>
                  </li>
                </div>
                <div className="flex">
                  <li className="mb-4 flex items-start flex-wrap w-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      className=" h-6 pr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>{" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <div className="w-4/5">
                      <a href="#" className=" hover:underline ">
                      Đà Nẵng
                      </a>
                      <p>
                      Tầng 12, Vĩnh Trung Plaza, 255 - 257 Hùng Vương, Phường Vĩnh Trung, Quận Thanh Khê, TP Đà Nẵng
                      </p>
                    </div>
                  </li>
                  <li className="mb-4 flex items-start flex-wrap w-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      className=" h-6 pr-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>{" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                    <div className="w-4/5">
                      <a href="#" className=" hover:underline ">
                      TP. Hồ Chí Minh
                      </a>
                      <p>
                      Tầng 7, toà nhà Citilight, 45 Võ Thị Sáu, Phường Đa Kao, Quận 1, TPHCM
                      </p>
                    </div>
                  </li>
                </div>
                <div className="flex">
                  <li className="mb-4 flex items-start flex-wrap w-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-6 w-1/5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    <div className="w-4/5">
                      <a href="#" className=" hover:underline ">
                        Điện thoại
                      </a>
                      <p>
                        1900 2013
                      </p>
                    </div>
                  </li>
                  <li className="mb-4 flex items-start flex-wrap w-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="h-6 w-1/5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    <div className="w-4/5">
                      <a href="#" className=" hover:underline ">
                        Email
                      </a>
                      <p>
                      info@gcosoftware.vn
                      </p>
                    </div>
                  </li>
                </div>

                
              </ul>
            </div>
          </div>
          <div className="w-full md:w-7/12 flex">
            <div className="w-1/2 sm:w-1/3">
              <h2 className="mb-6 text-sm font-semibold ">Các ngành</h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Công nghệ
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Tiếp thị & Quảng cáo
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Truyền thông & Giải trí
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Logicstics & Vận tải
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Giáo dục & Đào tạo trực tuyến
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Bán lẻ & Thương mại điện tử
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Công ty Product
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Doanh nghiệp vừa và nhỏ (SME)
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/2 sm:w-1/3">
              <h2 className="mb-6 text-sm font-semibold ">Dịch vụ</h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Bảo trì và nâng cấp
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Tư vấn & Phát triển phần mềm
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Phát triển ứng dụng di động
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Tư vấn & Thiết kế website
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Dịch vụ kiểm thử phần mềm
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Nhóm phát triển có chuyên môn cao
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Dịch vụ IT Offshore & Out Sourcing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Phát triển phần mềm tùy chỉnh
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/3">
              <h2 className="mb-6 text-sm font-semibold ">Tài nguyên</h2>
              <ul className="text-gray-300">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Về chúng tôi
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Tuyển dụng
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Quy định chung
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Chính sách bảo mật
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Hỉnh thức thanh toán
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Giao nhận - cài đặt
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Chính sách bảo trì
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Chính sách hoàn tiền
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Liên kết
                  </a>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path></svg>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-6 px-4  md:flex md:items-center md:justify-between container m-auto">
          <span className="text-sm text-gray-300 sm:text-center">
          © 2021 GCO Software. Số QĐ thành lập: 0109817960 do sở KH & ĐT TP Hà Nội cấp ngày 15/11/2021.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
           <img src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=21e274ab-cce5-4f8b-8943-51e33336dc37" alt="" />
          </div>
        </div>
      </footer>
    </div>
  );
}
