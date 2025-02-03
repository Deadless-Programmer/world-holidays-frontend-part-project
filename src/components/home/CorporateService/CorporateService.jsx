import React from "react";
import Marquee from "react-fast-marquee";

function CorporateService() {
  return (
    <div className="container max-w-7xl my-20 mx-auto px-4">
      <div className="title mb-8">
        <h1 className="text-3xl font-semibold md:text-4xl font-playfair text-center mt-1 uppercase">
          Our <span className="text-orange-500">Corporate</span> Client
        </h1>
      </div>

      <div className="py-10">
        <Marquee className="overflow-hidden" speed={60} delay={0} gradient={true}>
          {[ 
            "https://www.ispahanifoods.com/wp-content/uploads/2019/10/logo.png",
            "https://www.btraceng.com/assets/img/top_logo.png",
            "https://dghs.gov.bd/sites/default/files/files/dghs.portal.gov.bd/front_service_box/0ff27ed6_e8d8_4309_a409_432729e2b4e1/2021-01-18-20-15-fe26824e178f11d9bd3523d0e0a4682a.jpg",
            "https://www.ccceng.cn/public/en/img/logo.png",
            "https://btraccl.com/assets/img/top_logo.png",
            "https://bsrm.com/wp-content/uploads/2021/05/BSRM-Logo-1.png",
            "https://www.globalinsurancebd.com/ins/images/clients/logo-copy-scaled.jpg",
            "https://media.prothomalo.com/prothomalo-english%2Fimport%2Fmedia%2F2019%2F08%2F11%2F6ee4ad4f1450453e468b414ca598fbd7-DGHSt.jpg?w=700&auto=format%2Ccompress&fmt=webp",
            "https://www.banglacat.com/asset/image/logo/main_logo.png",
            "https://www.btractech.com/img/logo1.png",
            "https://amiapp.dpdc.org.bd/assets//mar6.png",
            "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiEuVw90rQhr88g81NFwN_0BulIc2WbgIOCxFVcTgk62aooWm0UFx5N7tirVfBRL1RbPEcRD_jdyzpQ1k3dAHobjBC11KoEFyrK5P2ESYkd19h68g7pBkJlGUdRmK9sShLfaFBcobHRM10/s320/HPNSDP-Logo.jpg",
            "https://scontent.fdac165-1.fna.fbcdn.net/v/t39.30808-1/298985061_404582118441184_3294455798912809074_n.png?stp=dst-png_s200x200&_nc_cat=104&ccb=1-7&_nc_sid=2d3e12&_nc_eui2=AeFzCifgzSwn4qMK_L0hkP1-Xg_Iu2FgvkVeD8i7YWC-RUJfL9Sx-XuPl7V9eWUNQHISO_g6p_8HkyOXi0VCiMua&_nc_ohc=oMcJvBIBCs0Q7kNvgFoblD9&_nc_zt=24&_nc_ht=scontent.fdac165-1.fna&_nc_gid=An8TrKRW0-hfz_xVgCx43eL&oh=00_AYDtvW8t7ePfBx_RxTyMD4EFJ2hFzXEASjF3DOjh-wG85Q&oe=67A53F33",
            "https://www.burgerkingbangladesh.com/webnew/assets/images/logo_latest.png",
            "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/ATN_Bangla.svg/311px-ATN_Bangla.svg.png?20100805015027",
            "https://upload.wikimedia.org/wikipedia/en/8/8b/Logo_of_ICDDR%2CB.png",
            "https://scontent.fdac165-1.fna.fbcdn.net/v/t1.6435-9/176918091_132319052244532_3353834730189092366_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=2285d6&_nc_eui2=AeFf_2a5VqqldAJX3YaKrQPHo1q6Vxfh9Z-jWrpXF-H1n-aiwxs-QirGrNAIdhvRE1zYUtERXAoqaoyqJXSrvCBK&_nc_ohc=-Z1VckVdcBEQ7kNvgG12Ovh&_nc_zt=23&_nc_ht=scontent.fdac165-1.fna&_nc_gid=AQYknpEylHl8ZnBRxS2496e&oh=00_AYBlp6Ihyqk-576nJSHmWK3ChfQZPA5WuNs6dyOFKP8o5A&oe=67C6CF9B",
          ].map((src, index) => (
            <div key={index} className="h-28 w-28 sm:h-28 sm:w-28 mx-4 border p-2 shadow-lg flex items-center ">
              <img className="w-full h-full object-contain" src={src} alt="Partner Logo" />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default CorporateService;
