// HAPPY EV WORLD — Centralized Product Catalogue Data

const PRODUCTS = [
  {
    id: "ev-scooty-01",
    name: "EV SCOOTY 01",
    badge: "AVAILABLE NOW",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1WNdhdOlfMxdk8gyuDmmZ4aYDgwsReJincRCKx23VWYpDyH49STikHfEQh0_BNOW0Wb7uIrY6dVaz0TQ4TO2BurQPKj0Ri0RKfWzfK7MZ48S6ObV_L_lxJ70W7u_VAxAkkD6Z1PEGQ7wf7YPO0v132bh8FG1heUYitK1U_LQTThPTSfkML0ETGOt24Wn1yYmG6vuk5ZDLIo8olVywXm-YT3oh6ffHUxg4R1k1P8ZNeSvdoIMay1b-",
    description: "The benchmark for electric scooters. Unmatched performance and smart connectivity.",
    range: "150 KM",
    speed: "90 KM/H",
    battery: "3.7 kWh Li-ion",
    featured: true
  },
  {
    id: "ev-scooty-02",
    name: "EV SCOOTY 02",
    badge: "POPULAR",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBziMTiERVMvX7zq3TFkHwvZc-o9a7wY2Zu0QSebRw4SbSm7y6i_0rO5rwJkgysDvWFfwSuefR5nXK82Bv0uWDwHsZp0kbGigZyFhflFsCdQJwYMhdviQizCQKH2FPW__Jb2sbPMnsAMuIUSyDVJwTg5xR02xf2r95VKHaXYli_Mj1bA9OMmNAsdUptaoDwGhAh76K_9K2HtJtsDydDHPnN5qEV3KFm6hUotd8mXREPQVMrFllrFmJ1",
    description: "Smart, simple, and reliable for your daily commute with ultra-smooth acceleration.",
    range: "100 KM",
    speed: "78 KM/H",
    battery: "3.04 kWh",
    featured: true
  },
  {
    id: "ev-scooty-03",
    name: "EV SCOOTY 03",
    badge: "LONG RANGE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2BFptD-kroNYPSTSvpGnxTSSBZGvpaVovIPxLAqmrbe8JW0Z7287NW2fT05Ip0rTFVa2Bb8gAFK77E2OF-xdjCTC7M3v0nG_gK_6-C36ccwcV2k_k9M8uBB4w-gmzj6ARv07RfVpJjjQBQbVOvGwE02rEcCrq4tOLBBboFvBEl0yGyDluV1LdlzOQkuXPYLYt3CfHZkKR82r2c95MyYUYDbAJcBW1xdC__CgzSy3Az2aCgKiwhJh4",
    description: "Timeless aerodynamic chassis design meets electric future technology.",
    range: "120 KM",
    speed: "73 KM/H",
    battery: "3.2 kWh",
    featured: true
  },
  {
    id: "flagship-ev-01",
    name: "FLAGSHIP EV 01",
    badge: "FLAGSHIP",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBD4XN9DE8EU50EiogjjP0Ff9OrV7fQc29dkZ8rxAp9qGL0Djn-0wvv1iPp_t1slGQaEbZz_HxeDvSjZRY-otPokc93NrStbFlPxLZ6HLhVohKmAGDcrx6NKCTE6i3nLSePzkU-IvtmVTG219dg5jVsyl6AIg-rnVJDD4rXLuxaapsJasPUM6LkA0MLOgkHDi9h0jZQaKiDcQpkVDDsyOYu6c6_H8bXnX10R1g1lUoxJsoOh-wRIRpt",
    description: "Top-tier flagship electric scooter in clean studio white with graphite accents.",
    range: "140 KM",
    speed: "85 KM/H",
    battery: "3.5 kWh",
    featured: false
  },
  {
    id: "city-ev-01",
    name: "CITY EV 01",
    badge: "URBAN COMMUTE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuANj0KumpWKWDukEup6PhosR0w4exmQRZUVTp-4UN7Tv1Iq_yTvwuX0YaLjpEHZbG-vHItTOS_78-_DDhejCgwFr21KvDA6huDz2C02kHRBOB9auEA_qUUMjXblRRITfyvioGhqAXSwCE044AdnXPcuuUpb50lLQ10nAeZcbLUb8FM9WQCIibI61UxciNGlM6NMqm1XNXb0-d37UeD6sS0rv1aG9pA15JY2y8OOeX8NwliPdQrDHV3X",
    description: "Sleek, lightweight urban electric scooter engineered for agile city commuting.",
    range: "95 KM",
    speed: "65 KM/H",
    battery: "2.5 kWh",
    featured: false
  },
  {
    id: "urban-ev-01",
    name: "URBAN EV 01",
    badge: "SMART CONNECT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDMncT_GpMEFHPvICao7ZO9SUCqDF8YSAf8wEH40TZpOdnvnVWa0hK68EQp-fzeGEwuKFHwzGIo2-UD7eTwhaCHSLM3gDWhzh5HIJykPSgxrlF0kjjTYIgRKUa1WvACHK2SUKZIfsL2xa9ZbQ45SfRUofzCEKCZJDI-27KIgQ_5wjGHBMWvDX6AZtyHdVin951AAbYNIWAOVTtPpp922-ZkQDUfnGTW8GHoIDX6O31HEYGOR1QFTzSC",
    description: "Precision-engineered electric drive with minimalist architectural deck design.",
    range: "110 KM",
    speed: "75 KM/H",
    battery: "2.8 kWh",
    featured: false
  },
  {
    id: "e-move-01",
    name: "E-MOVE 01",
    badge: "NEW RELEASE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA1LYExgiTjHiF6AhzlF7Ig23x9n7QpoJoVWkhDvVNR8FIRP7-TrtHSF1wSnauzSFVEH28c7gf9d5ASAOF-MyBt2ufYEp_SpKs4xZRj7hZIV2B1L15bR2rmmTCt6Fa3q9P-NlE1WlfOb1RKs1t1nHT9SBDE4jsqvLXHoMBnSbA9f3f7kY_Lz4CZGGKGy7D2Qf_R501msTiG4hrOFqAt0BTTZFDW8UcVJnqk6yNMVHWxdgLRSxCRKVS5",
    description: "Next-gen battery management system with fast-charge capability in under 45 mins.",
    range: "130 KM",
    speed: "80 KM/H",
    battery: "3.1 kWh",
    featured: false
  },
  {
    id: "e-move-02",
    name: "E-MOVE 02",
    badge: "PERFORMANCE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvITEEWss35mQbzDFirTmr82jDtjl7n89VnTgL2Hu3IBcczFwNm2pnmpIFZj2qLPj2m6s4uRJhukJv0arjWcACPHzIX-SsIrxsR6MXeKFrLfE-HY2h3EspjcAIm1F_Ku9JjWsqKF1HRP_sqYTKQdlsP6eYOc0wSCDdP80Od_vRkyEjUjknQ-PpzYAL52zVl_G1v-NPsf9Ubsc9TrvcsRiSPW1P8A1JMHBjy2q6c0tAPH7xRPUxLG_b",
    description: "Ultimate long-range performance EV engineered for highway speeds and rapid acceleration.",
    range: "160 KM",
    speed: "95 KM/H",
    battery: "4.0 kWh",
    featured: false
  },
  {
    id: "urban-ev-02",
    name: "URBAN EV 02",
    badge: "POPULAR",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0Hs0nIari_-Zb5sYISRrgXSjYZ0h4TtS2hCugoa6RvdiN8jiSEY0hL89Yy76zWKA8WzL8JwrbpQkVKrpi65Ah-XDrQWkQfv0iq93JgGL4FTIOHR4HK68qT-l2GIo46NekDWTZMnOkgaKOs0ZqrhM-m8yh3KCShTOxfGO5M-EUB-nX1AHO4cP2TMrcMcGFJIqCCRN9Rbm47ly7dNM891dL-ZXrjTBmDtYc-MGT4nHwfhtCRDeQZCB9",
    description: "Matte graphite chassis featuring digital telemetry and dual disc braking system.",
    range: "115 KM",
    speed: "70 KM/H",
    battery: "2.9 kWh",
    featured: false
  },
  {
    id: "city-ev-02",
    name: "CITY EV 02",
    badge: "COMFORT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASuLGGj5aId_qaiFwbD_qA1N6v14N3wGVYp1ixe2X0RkIPK9lmRrYhMlQ-t93d5ojn26e5Og8tllD5RhZ-8MHVCsJFI0kbecl5BfF-57IX9Miri4nimZCT1exSKX9TNdZFRjuzyurOOQxsxdfQjsooVZg71Dwtfa0_obw8lwvH0sCLcVkX1JVoz2Bjg55AoCOQvGCTVXGdkZX9feFG07P66Oj3JKBRkhsoYK320gposKxSiirahvcY",
    description: "Maximum comfort suspension specially tuned for smooth navigation on Indian roads.",
    range: "105 KM",
    speed: "68 KM/H",
    battery: "2.7 kWh",
    featured: false
  },
  {
    id: "sport-ev-01",
    name: "SPORT EV 01",
    badge: "SPORT",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAInp8Y0Tpwr15zvut5sb_CLseJhW35yymw_GxxeNl6_Q73TW0kcRlaBKdB2812kYDJc3poISLpTWLAB5GFtlMzbWQ7DVfu6fsxdt7eDe9zMTTnoOMgHPoD2OAvpt1C2f6T9ak3fukLzb6Qp4bpOZZlJQj5xOZcd2L-LZG0E9OuOfj7cW9XZpxTad7l9R5wXbGI6iN_WvrQRqIaTHfhVaJ97tH-K4I5UNcJtbLktWn90I62Lyf_rxGo",
    description: "Aggressive street styling backed by instant electric torque and sport mode.",
    range: "125 KM",
    speed: "82 KM/H",
    battery: "3.0 kWh",
    featured: false
  },
  {
    id: "electric-ride-01",
    name: "ELECTRIC RIDE 01",
    badge: "LONG RANGE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu21G3xLCVm3KO8mFpvVNZXBipOSgZjHQWxyAFkXSXceFBF7QcSU_61ZLq_hUfPBTtrODQCuea0EZGllcKOnNQXk-_ovYozYB-oLFqkHEsYft63_y3qg-usGXJP19Q59AeIGSV8fUejJDWC0ymsF62XvAG7MPaA1Vzh3bw4jPeW9BN_WpTu0pFuN_S_XseydjxAxt-tVErulz9DJFmnzoCqNZuCZujzHPoP0jOxErS1PvvwxqqZSmj",
    description: "Heavy-duty electric scooter with dual swappable battery architecture.",
    range: "150 KM",
    speed: "88 KM/H",
    battery: "3.6 kWh",
    featured: false
  },
  {
    id: "urban-ev-03",
    name: "URBAN EV 03",
    badge: "AFFORDABLE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUifz2JbO5T0WG7q-PWDBQtIw-Z-tFpOnVCSr-kT5m_-PCu3WO19dE4icrDkcSfShDuUzGX0dYt4Kry0_xaJp7VMqW-EcZMpOptVEVxh8ZykDyP1BZID45yGXEtG6MlF5_ViT-Ln3gAa74C2mYB1sPdG8Vy7XcBDISsRhimOQ0BVDWSUuYXaKT_h12XG_tlrtdD7x5lUWSoZZIty5WU9Dhii0lVw-MGXiEGjHfZcAMCFe5dgwHir5x",
    description: "Lightweight, agile entry-level EV ideal for daily city errands.",
    range: "85 KM",
    speed: "55 KM/H",
    battery: "2.0 kWh",
    featured: false
  },
  {
    id: "urban-ev-04",
    name: "URBAN EV 04",
    badge: "PREMIUM",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAQO4UJESs6YElNsIBIcGsJYbRhMLPVW_XiG35Zu7MCtAiKKwoHskbwlkqrFOv0zEEWMOhsLPVZaGBKhafsQUDjdmKN-9TnSZJlZBXkFIwWJg2uKgwXrwYvWKz43aUZfnBOQINmRYfFOdxNcPYXgIDk-LH_z93oX7bCPrBVo3syeyeUeZiuNJZOoWHcQkiHxnaaAIAQV4ZZ0iDxyqxNdfT9TSk-LeY9yQVncYN60CzVMiUnKXI6zxSJ",
    description: "Premium urban cruiser offering maximum under-seat storage and pillion comfort.",
    range: "135 KM",
    speed: "85 KM/H",
    battery: "3.4 kWh",
    featured: false
  },
  {
    id: "eco-ev-01",
    name: "ECO EV 01",
    badge: "ECO CHAMPION",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA5OhG6M-KwmTn4Xoy12PzTWqmaSBWJ1yJTWTBPknk7g6MVfO5UofBjmJP74STHS06RayiHQdqvm7OS3qo1R_4Rba5982UNjK_rXnS7CHbgdVQYKWuTgL1k1Z9BQRVz2_b6aNkUeA-EV1lmvTniDUtTw_3q5ECtFCe5J9caGx3AIuDzqvsc4Cb9MoMP78qRGcttRTpVxWSEe4qn2Nz7wkEeq6tq9dZ0rCA7xzD-njTuqgBIKGeYRuXx",
    description: "High efficiency motor system with intelligent multi-stage regenerative braking.",
    range: "145 KM",
    speed: "75 KM/H",
    battery: "3.3 kWh",
    featured: false
  },
  {
    id: "metro-ev-01",
    name: "METRO EV 01",
    badge: "URBAN BEST",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtQkxI2P4TbYjkZBNO71229j4HDkNxrGRNfxoqriqmuucBtRAXQXmFIYamFNWEXEqn18r5jncb0IoDtQW9CrapDdRqWhysg6hW2DUqEcGnb1uenKqFxE40eu83_33N200RlI8XHJDJe2uhqp5yVqSKoDJGcfua3GU10EycHp_sHoB8p2EDvBVvg1GFzs2FBP6Qn-v9fOp7Aua0qYn0nzhW2eNVPLt_e4weQJ59dQjb_0gOeVuRHSyl",
    description: "Compact commuter scooter engineered specifically for dense Kolkata traffic.",
    range: "110 KM",
    speed: "72 KM/H",
    battery: "2.8 kWh",
    featured: false
  },
  {
    id: "metro-ev-02",
    name: "METRO EV 02",
    badge: "SMART TECH",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCMvIHDQEKlirE1lDrKe53xUeyMND4e2sVWrfbnDRi3S-QIk2ZbsdCPpAXmQjrRY-MDUUZpSZzn9U-zBSJl0oIxGVbknsndgO8buhw5F-fdekN4Zgs83zKgd4Dln1fufZ2qWcBnweyKKG9Tbz2q7INXAvB9r8MxXmSfRj0VSvf1b0SEU6I6nySvAu7AnVKgOKhpqJai5iGiqaSsihyPwswk5oi9pnov9IZoqdcDSc5B8GioCYJu2yZY",
    description: "Connected app telemetry, turn-by-turn navigation, and remote lock diagnostics.",
    range: "125 KM",
    speed: "78 KM/H",
    battery: "3.1 kWh",
    featured: false
  },
  {
    id: "swift-ev-01",
    name: "SWIFT EV 01",
    badge: "AGILE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdwp3pqUDtUB5BY8lPJQfCwwsZN5q9VgFTLypfz5qQ36kjYfB43lafYjxfv1pge1gjahLB2x_t0CqsQ6QzGhx0wVVcixj09X_J6ytvTOnfNzWzNbMvmDQHC6etHRTU0w9JzupfKs0clJH3CmiRbp6gTmmWneT0jLSev27jc4kxD9hOHt_kjJOm75QwnbDLkzftR9cioVk4ilM4T3WY6xL1g6V0Ucjt6USbq7FfsSE2Rr33iyAqLlRN",
    description: "Ultra-nimble frame with responsive handling, perfect for fast city navigation.",
    range: "90 KM",
    speed: "60 KM/H",
    battery: "2.2 kWh",
    featured: false
  },
  {
    id: "swift-ev-02",
    name: "SWIFT EV 02",
    badge: "CITY RIDE",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD2oTaJ5Bi8foKmvbGPkIlia3gmC2hJbYl86sgp_WHA7DjB6gRdDrSm9_0IVJB9wvo9WF4G9qw25Jgr5RZKUjeMFOa_2N_Kjf9BcxkTxeQ0HV6BpcEDekIjoaevCdnDBWRTgrA-KIqCU9fC1G8oFnv0x-Ofc6aMEQlzXepcSVIE_MZR1dH_ZtpPRtaUBL4PuwuNMQy1Mqm6DH3WIMKN9iaK3p_A87U_XnsFaax0Y0hhWjzFVxhPk1-d",
    description: "Enhanced chassis stability with dual rear shocks and ergonomic seating.",
    range: "100 KM",
    speed: "65 KM/H",
    battery: "2.4 kWh",
    featured: false
  },
  {
    id: "super-ev-01",
    name: "SUPER EV 01",
    badge: "SUPER PRO",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCUJ7pyO7Q28UrVi7uNLzLfz5VerMqU93ev8SxUZ3FJbT5DJ3NANdZvK7Y8WbPYA4iyvmYbJ7OH7hJgF2Hii9lOZMuYclYcyI9z7s2MuHhGd7WgvYKV0jEoSA5etmQy4cYoLP8py0QHQGprxDNhIN9SSzXhaR2xjT8ntDsmRWyCPJ7N4T3gx_sOEmEnGKzCtOcsb9I8pQ9SAe0bRRgfk0MkJQDbeocevNKUjYPhqCy6ZcPvmW1hren-",
    description: "High output dual-motor setup delivering hyper acceleration and ultimate control.",
    range: "165 KM",
    speed: "100 KM/H",
    battery: "4.2 kWh",
    featured: false
  }
];

if (typeof window !== 'undefined') {
  window.PRODUCTS = PRODUCTS;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRODUCTS };
}
