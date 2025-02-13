const PORTFOLIO_PHOTOS = [
  {
    src: "https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/469580211_122132907992388803_7990760864887062702_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGI1SVitbw01vlRt2K7dywgiCS4eLvqxoyIJLh4u-rGjMdm-VhwPftrl1MR1hABxpu94dOz84oQ7C3kwjKDHOxx&_nc_ohc=vgCk29V-wqcQ7kNvgHxq6n5&_nc_zt=23&_nc_ht=scontent.ftnr2-2.fna&_nc_gid=ARrTCL6jXa2tTzaZAN5xvYb&oh=00_AYCdHQdw0A4CgHmC7Bvc7TouXBkbq8lxLd2mW27ymXa90g&oe=676790E5",
    alt: "Portrait Photography ARSENAL"
  },
  {
    src: "https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/468717460_122132908196388803_8530538729379868700_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFLctPtpaiUQTiq8F0rg3639FMBacaZ9yT0UwFpxpn3JAiP9ZkZFC0_kgvY_TtAK6psxS-L_a8xEPO4oSQU0dv4&_nc_ohc=J2tk1OXKsZgQ7kNvgEzIimW&_nc_zt=23&_nc_ht=scontent.ftnr2-2.fna&_nc_gid=Ae6fzRou8t2C-c6OLXZBVsd&oh=00_AYAa4S1qrKx99fjIegf9YF8_evtqgJVX1tg81_SJKoKyRg&oe=67677BAC",
    alt: "Portrait Photography ARSENAL Bust"
  },
  {
    src: "https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/468861802_122132303276388803_6271138333772828512_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFgtgx7qPo5gxRFb_scA91whYDt4baVsRmFgO3htpWxGVIQYIkXGAxesqyRLAxgAIm2wCaX2aT61Z4tdPTACpku&_nc_ohc=9ZUBwCJpJBQQ7kNvgHuazYE&_nc_zt=23&_nc_ht=scontent.ftnr2-2.fna&_nc_gid=AyQJ0U1lYse3lVb0Q6C22D-&oh=00_AYDgG7zoOyH-RhwT1foaHsBRTzgDaVDntldD6BzjFuDHOw&oe=67679753",
    alt: "ABIA Photography"
  },
  {
    src: "https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/469011804_122132303300388803_8426263106219725265_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGUukIfI6BsLEYQwMMtnSDNaiPQ-BAR0x5qI9D4EBHTHoMoZzuTsDTYtTVn6AhK-l6OfIJERzL4gK7NTR0s-R9r&_nc_ohc=BUcNUvdQMykQ7kNvgHtr2uS&_nc_zt=23&_nc_ht=scontent.ftnr2-2.fna&_nc_gid=AUpodiT9B6jV91lLLG8gUJW&oh=00_AYBc_ZCP2VmN1WKHhjAqMP4biErvNPl-j3-iC8oaPeeB9Q&oe=6767869B",
    alt: "ABIA Photography 2"
  },
  {
    src: "https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/468429040_122131390832388803_5579353258041901341_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFKu46gNG3nH_Qv9wtmJQkJ8aX8YHVrk2LxpfxgdWuTYl7x2FP2VE23uD-Sr_mK2UUcfwnIpGIbIImocauYSyyY&_nc_ohc=0yAehA1_4qQQ7kNvgF_FqLP&_nc_zt=23&_nc_ht=scontent.ftnr2-2.fna&_nc_gid=AdR2HypLAqlPL5qkUPa5XXx&oh=00_AYCaWFmGG85FXJrGADL8zyuT58QIOfRcx6MCUUqH2Cwu1g&oe=67678B83",
    alt: "HAPPY Photography"
  },
  {
    src: "https://scontent.ftnr2-2.fna.fbcdn.net/v/t39.30808-6/468216986_122131391024388803_3341735474465364723_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGsTX155yTywhex6odGvVlsBG9GuSlHFFQEb0a5KUcUVLheTSyVf_cYeFjCo1nigeRiSwiX8UeRt7VjLytfMIyT&_nc_ohc=0CvYccXVPTIQ7kNvgH9MPQR&_nc_zt=23&_nc_ht=scontent.ftnr2-2.fna&_nc_gid=A4hpafwD2ldF--RfJQvAfSW&oh=00_AYBHG_SKGG_rGn6KBGboqSRZlTD5AxvK_IrmY1J8_b_gEg&oe=6767825A",
    alt: "MANJA Photography"
  }
];

export const Portfolio = () => {
  return (
    <section className="py-20 bg-secondary" id="portfolio">
      <div className="container">
        <h2 className="text-4xl font-bold text-center mb-12">Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PORTFOLIO_PHOTOS.map((photo, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg aspect-[3/4]">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
