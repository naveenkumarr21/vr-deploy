TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "audios": [
   {
    "autoplay": true,
    "class": "PanoramaAudio",
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_23B58540_2FA6_FC5E_41C0_E7599CEC1CDA.ogg",
     "mp3Url": "media/audio_23B58540_2FA6_FC5E_41C0_E7599CEC1CDA.mp3",
     "id": "audioresource_232E9D8F_2FA6_CCE1_41A8_5242ED5BA926"
    },
    "id": "audio_23B58540_2FA6_FC5E_41C0_E7599CEC1CDA"
   }
  ],
  "thumbnailUrl": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_t.jpg",
  "hfov": 360,
  "id": "panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1",
  "pitch": 0,
  "hfovMin": 120,
  "adjacentPanoramas": [
   {
    "backwardYaw": 11.91,
    "class": "AdjacentPanorama",
    "yaw": -8.34,
    "panorama": {
     "audios": [
      {
       "autoplay": true,
       "class": "PanoramaAudio",
       "audio": {
        "class": "AudioResource",
        "oggUrl": "media/audio_23642C00_2FAE_F3DF_4188_AA3D7BBBB0C0.ogg",
        "mp3Url": "media/audio_23642C00_2FAE_F3DF_4188_AA3D7BBBB0C0.mp3",
        "id": "audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182"
       },
       "id": "audio_22B51CA9_2FAE_CC2E_41B4_A5BBB73AEA0C"
      }
     ],
     "thumbnailUrl": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_t.jpg",
     "hfov": 360,
     "id": "panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC",
     "pitch": 0,
     "hfovMin": 60,
     "adjacentPanoramas": [
      {
       "backwardYaw": 90.02,
       "class": "AdjacentPanorama",
       "yaw": -90.69,
       "panorama": {
        "audios": [
         {
          "autoplay": true,
          "class": "PanoramaAudio",
          "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
          "id": "audio_219FF965_2FAA_D426_41C4_B795582BB8EC"
         }
        ],
        "thumbnailUrl": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_t.jpg",
        "hfov": 360,
        "id": "panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF",
        "pitch": 0,
        "hfovMin": 60,
        "adjacentPanoramas": [
         {
          "backwardYaw": -90.69,
          "class": "AdjacentPanorama",
          "yaw": 90.02,
          "panorama": "this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC",
          "distance": 1
         },
         {
          "backwardYaw": 24.25,
          "class": "AdjacentPanorama",
          "yaw": -27.22,
          "panorama": {
           "audios": [
            {
             "autoplay": true,
             "class": "PanoramaAudio",
             "audio": {
              "class": "AudioResource",
              "oggUrl": "media/audio_2135AF43_2FAA_CC61_4191_AE63101DD7C9.ogg",
              "mp3Url": "media/audio_2135AF43_2FAA_CC61_4191_AE63101DD7C9.mp3"
             },
             "id": "audio_2135AF43_2FAA_CC61_4191_AE63101DD7C9"
            }
           ],
           "thumbnailUrl": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_t.jpg",
           "hfov": 360,
           "id": "panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037",
           "pitch": 0,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "backwardYaw": -27.22,
             "class": "AdjacentPanorama",
             "yaw": 24.25,
             "panorama": "this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF",
             "distance": 1
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "CC6",
           "cardboardMenu": {
            "selectedBackgroundColor": "#202020",
            "class": "Menu",
            "selectedFontColor": "#FFFFFF",
            "label": "Media",
            "backgroundColor": "#404040",
            "fontFamily": "Arial",
            "fontColor": "#FFFFFF",
            "opacity": 0.4,
            "rollOverOpacity": 0.8,
            "id": "Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
            "rollOverFontColor": "#FFFFFF",
            "children": [
             {
              "label": "IT Park Entrance",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 0)"
             },
             {
              "label": "WAY TO G04",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 1)"
             },
             {
              "label": "WAY TO INNOVATION HUB",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 2)"
             },
             {
              "label": "WAY TO HOD OFFICE",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 3)"
             },
             {
              "label": "WAY TO SEMINAR HALL",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 4)"
             },
             {
              "label": "WAY TO SVG SIR CABIN,HOD OFFICE",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 5)"
             },
             {
              "label": "WAT TO G10,STAFF ROOMS",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 6)"
             },
             {
              "label": "1st Floor",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 7)"
             },
             {
              "label": "ITP_G01",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 8)"
             },
             {
              "label": "Innovation Hub",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 9)"
             },
             {
              "label": "ITP_G03",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 10)"
             },
             {
              "label": "ITP_G04",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 11)"
             },
             {
              "label": "ITP_G06",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 12)"
             },
             {
              "label": "ITP_G07",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 13)"
             },
             {
              "label": "ITP_G09",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 14)"
             },
             {
              "label": "ITP_G10",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 15)"
             },
             {
              "label": "StageView of Seminar_hall",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 16)"
             },
             {
              "label": "AudienceView of Seminar_hall",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 17)"
             },
             {
              "label": "WAY TO G07",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 18)"
             },
             {
              "label": "Way to CC6",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 19)"
             },
             {
              "label": "Way to CC8",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 20)"
             },
             {
              "label": "Way to CC5",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 21)"
             },
             {
              "label": "Way to CC 1 & 2",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 22)"
             },
             {
              "label": "CC1",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 23)"
             },
             {
              "label": "CC2",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 24)"
             },
             {
              "label": "CC6",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 25)"
             },
             {
              "label": "CC8",
              "class": "MenuItem",
              "click": "this.mainPlayList.set('selectedIndex', 26)"
             }
            ],
            "rollOverBackgroundColor": "#000000"
           },
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "class": "ImageResourceLevel",
                "url": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "inertia": false,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 850,
                  "width": 850,
                  "class": "ImageResourceLevel",
                  "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                 }
                ]
               },
               "hfov": 56.4,
               "id": "panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_tcap0",
               "angle": 0
              },
              {
               "maps": [
                {
                 "hfov": 6.96,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 64,
                    "width": 62,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 12.56,
                 "pitch": -1.69
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "rollOverDisplay": false,
               "id": "overlay_32A78B20_2DEF_DDA1_41AD_E9877A31A135",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 19)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 6.96,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 12.56,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 128,
                    "width": 124,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -1.69
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 34.27,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 105,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_0_HS_1_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 24.25,
                 "pitch": 3.16
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "rollOverDisplay": false,
               "id": "overlay_33B0A82F_2DEF_7BBE_41B3_E2C8E1EB6053",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF, this.camera_3EFBB643_305B_931B_41B2_F29CCAECBC41); this.mainPlayList.set('selectedIndex', 19)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 34.27,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 24.25,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 93,
                    "width": 613,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": 3.16
                }
               ]
              }
             ]
            }
           ],
           "vfov": 180,
           "hfovMax": 120
          },
          "distance": 1
         },
         {
          "backwardYaw": 2.99,
          "class": "AdjacentPanorama",
          "yaw": -0.17,
          "panorama": {
           "audios": [
            {
             "autoplay": true,
             "class": "PanoramaAudio",
             "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
             "id": "audio_21CB6711_2FAB_7DE1_41AB_CAC4333A9908"
            }
           ],
           "thumbnailUrl": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_t.jpg",
           "hfov": 360,
           "id": "panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F",
           "pitch": 0,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "backwardYaw": -0.17,
             "class": "AdjacentPanorama",
             "yaw": 2.99,
             "panorama": "this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF",
             "distance": 1
            },
            {
             "backwardYaw": 89.08,
             "class": "AdjacentPanorama",
             "yaw": -83.39,
             "panorama": {
              "audios": [
               {
                "autoplay": true,
                "class": "PanoramaAudio",
                "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                "id": "audio_21E9529F_2FAB_D4E2_419C_3841B5C98CEA"
               }
              ],
              "thumbnailUrl": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_t.jpg",
              "hfov": 360,
              "id": "panorama_3DC53593_2D68_D566_41A2_BD7032EE4536",
              "pitch": 0,
              "hfovMin": 60,
              "adjacentPanoramas": [
               {
                "backwardYaw": -83.39,
                "class": "AdjacentPanorama",
                "yaw": 89.08,
                "panorama": "this.panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F",
                "distance": 1
               },
               {
                "backwardYaw": -2.38,
                "class": "AdjacentPanorama",
                "yaw": 10.93,
                "panorama": {
                 "audios": [
                  {
                   "autoplay": true,
                   "class": "PanoramaAudio",
                   "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                   "id": "audio_21B1133D_2FAB_5421_41A7_A4DCEA8D7680"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_t.jpg",
                 "hfov": 360,
                 "id": "panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF",
                 "pitch": 0,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 10.93,
                   "class": "AdjacentPanorama",
                   "yaw": -2.38,
                   "panorama": "this.panorama_3DC53593_2D68_D566_41A2_BD7032EE4536",
                   "distance": 1
                  },
                  {
                   "backwardYaw": 94.82,
                   "class": "AdjacentPanorama",
                   "yaw": -87.41,
                   "panorama": "this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC",
                   "distance": 1
                  },
                  {
                   "backwardYaw": 171.23,
                   "class": "AdjacentPanorama",
                   "yaw": 98.02,
                   "panorama": {
                    "audios": [
                     {
                      "autoplay": true,
                      "class": "PanoramaAudio",
                      "audio": {
                       "class": "AudioResource",
                       "oggUrl": "media/audio_21686B11_2FAA_B5FE_41C5_02A5CCF1907B.ogg",
                       "mp3Url": "media/audio_21686B11_2FAA_B5FE_41C5_02A5CCF1907B.mp3"
                      },
                      "id": "audio_21686B11_2FAA_B5FE_41C5_02A5CCF1907B"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_t.jpg",
                    "hfov": 360,
                    "id": "panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0",
                    "pitch": 0,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 98.02,
                      "class": "AdjacentPanorama",
                      "yaw": 171.23,
                      "panorama": "this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF",
                      "distance": 1
                     }
                    ],
                    "class": "Panorama",
                    "partial": false,
                    "label": "CC8",
                    "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3217,
                         "width": 6434,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "inertia": false,
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "height": 850,
                           "width": 850,
                           "class": "ImageResourceLevel",
                           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                          }
                         ]
                        },
                        "hfov": 45,
                        "id": "panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_tcap0",
                        "angle": 0
                       },
                       {
                        "maps": [
                         {
                          "hfov": 6.9,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 69,
                             "width": 61,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 166.94,
                          "pitch": -3.56
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "id": "overlay_32C9BD5F_2DE7_559F_4182_5FB71A0A8B64",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 20)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "hfov": 6.9,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 166.94,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 139,
                             "width": 123,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -3.56
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "hfov": 17.72,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 38,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_0_HS_1_0_map.gif"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 171.23,
                          "pitch": 0.83
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "id": "overlay_32BC5905_2DE7_FD62_41A7_FF12CABCD4F9",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF, this.camera_200905A3_305B_911A_41B1_09A94BA0E470); this.mainPlayList.set('selectedIndex', 20)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "hfov": 17.72,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 171.23,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 131,
                             "width": 316,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_0_HS_1_0.png"
                            }
                           ]
                          },
                          "pitch": 0.83
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "vfov": 180,
                    "hfovMax": 120
                   },
                   "distance": 1
                  }
                 ],
                 "class": "Panorama",
                 "partial": false,
                 "label": "Way to CC8",
                 "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3217,
                      "width": 6434,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "inertia": false,
                     "class": "TripodCapPanoramaOverlay",
                     "rotate": false,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "height": 850,
                        "width": 850,
                        "class": "ImageResourceLevel",
                        "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                       }
                      ]
                     },
                     "hfov": 66,
                     "id": "panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_tcap0",
                     "angle": 0
                    },
                    {
                     "maps": [
                      {
                       "offsetY": 70.81,
                       "width": 141.61,
                       "class": "FlatHotspotPanoramaOverlayMap",
                       "yaw": -0.72,
                       "height": 141.61,
                       "offsetX": 70.81,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -18.59
                      }
                     ],
                     "class": "FlatHotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "id": "overlay_3A6339F7_2D2F_DCAF_41C4_6F48A56B410D",
                     "areas": [
                      {
                       "class": "FlatHotspotPanoramaOverlayArea",
                       "click": "this.mainPlayList.set('selectedIndex', 22)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "FlatHotspotPanoramaOverlayImage",
                       "offsetX": 70.81,
                       "yaw": -0.72,
                       "offsetY": 70.81,
                       "width": 141.62,
                       "height": 141.62,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 141,
                          "width": 141,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_0_0.gif"
                         }
                        ]
                       },
                       "pitch": -18.59
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "offsetY": 70.81,
                       "width": 141.61,
                       "class": "FlatHotspotPanoramaOverlayMap",
                       "yaw": -87.41,
                       "height": 141.61,
                       "offsetX": 70.81,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_1_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -27.58
                      }
                     ],
                     "class": "FlatHotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "id": "overlay_3A886239_2D2F_6FA3_41B3_8FB64F1D29AB",
                     "areas": [
                      {
                       "class": "FlatHotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC, this.camera_3FCD2578_305B_91F6_41AB_82D75F03274E); this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "FlatHotspotPanoramaOverlayImage",
                       "offsetX": 70.81,
                       "yaw": -87.41,
                       "offsetY": 70.81,
                       "width": 141.62,
                       "height": 141.62,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 141,
                          "width": 141,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_1_0.gif"
                         }
                        ]
                       },
                       "pitch": -27.58
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "hfov": 10.2,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 92,
                          "width": 92,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_2_0_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 98.18,
                       "pitch": -7.62
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "id": "overlay_35FB2848_2D28_BBE2_41C3_BD1D392E0E56",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.mainPlayList.set('selectedIndex', 26)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "hfov": 10.2,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 98.18,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 184,
                          "width": 184,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_2_0.png"
                         }
                        ]
                       },
                       "pitch": -7.62
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "hfov": 9.2,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "width": 18,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_3_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 98.02,
                       "pitch": -13.88
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "id": "overlay_3AAAE875_2D28_FBA3_4197_59E8962FEDE9",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0, this.camera_3FDE357F_305B_91EA_41A4_9278B55420B2); this.mainPlayList.set('selectedIndex', 26)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "hfov": 9.2,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 98.02,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 145,
                          "width": 169,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_3_0.png"
                         }
                        ]
                       },
                       "pitch": -13.88
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "hfov": 24.63,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "width": 76,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_4_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -2.38,
                       "pitch": -21.52
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "id": "overlay_35D91E80_2D2B_5761_4190_CC8006110A4C",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_3DC53593_2D68_D566_41A2_BD7032EE4536, this.camera_3FB94571_305B_91F7_41C5_7D71D2A318E3); this.mainPlayList.set('selectedIndex', 22)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "hfov": 24.63,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -2.38,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 99,
                          "width": 473,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_4_0.png"
                         }
                        ]
                       },
                       "pitch": -21.52
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "vfov": 180,
                 "hfovMax": 120
                },
                "distance": 1
               }
              ],
              "class": "Panorama",
              "partial": false,
              "label": "Way to CC 1 & 2",
              "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3217,
                   "width": 6434,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "inertia": false,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 850,
                     "width": 850,
                     "class": "ImageResourceLevel",
                     "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                    }
                   ]
                  },
                  "hfov": 58.8,
                  "id": "panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_tcap0",
                  "angle": 0
                 },
                 {
                  "maps": [
                   {
                    "offsetY": 70.81,
                    "width": 141.61,
                    "class": "FlatHotspotPanoramaOverlayMap",
                    "yaw": 0.11,
                    "height": 141.61,
                    "offsetX": 70.81,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -16.32
                   }
                  ],
                  "class": "FlatHotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "id": "overlay_3495D17C_2D27_EDA1_41A0_A607D935E0B7",
                  "areas": [
                   {
                    "class": "FlatHotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 20)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "FlatHotspotPanoramaOverlayImage",
                    "offsetX": 70.81,
                    "yaw": 0.11,
                    "offsetY": 70.81,
                    "width": 141.61,
                    "height": 141.61,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 141,
                       "width": 141,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_0_0.gif"
                      }
                     ]
                    },
                    "pitch": -16.32
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "offsetY": 47.21,
                    "width": 94.41,
                    "class": "FlatHotspotPanoramaOverlayMap",
                    "yaw": 89.08,
                    "height": 94.41,
                    "offsetX": 47.21,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_1_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -11.29
                   }
                  ],
                  "class": "FlatHotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "id": "overlay_374A0064_2D28_ABA2_41B0_68227FDDB899",
                  "areas": [
                   {
                    "class": "FlatHotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F, this.camera_3ED8D623_305B_931A_41B2_07C22549BAB4); this.mainPlayList.set('selectedIndex', 21)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "FlatHotspotPanoramaOverlayImage",
                    "offsetX": 47.21,
                    "yaw": 89.08,
                    "offsetY": 47.21,
                    "width": 94.41,
                    "height": 94.41,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 94,
                       "width": 94,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_1_0.gif"
                      }
                     ]
                    },
                    "pitch": -11.29
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 42.84,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "width": 54,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_2_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 10.93,
                    "pitch": -22.88
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "id": "overlay_37E9C831_2D2B_5BA3_4175_E69CCB5AFA06",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF, this.camera_3EE5A62A_305B_9315_41B4_00BD4805A821); this.mainPlayList.set('selectedIndex', 20)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 42.84,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 10.93,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 244,
                       "width": 831,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -22.88
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 10.15,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 92,
                       "width": 92,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 105.12,
                    "pitch": -9.77
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "id": "overlay_317517C1_2D29_74E2_4193_A035F76EA93A",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 23)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 10.15,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 105.12,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 184,
                       "width": 184,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": -9.77
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 30.63,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "width": 108,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_4_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 113.83,
                    "pitch": -15.5
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "id": "overlay_369250F9_2D28_ACA3_419A_458C473676F2",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 23)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 30.63,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 113.83,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 84,
                       "width": 568,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_4_0.png"
                      }
                     ]
                    },
                    "pitch": -15.5
                   }
                  ]
                 }
                ]
               }
              ],
              "vfov": 180,
              "hfovMax": 120
             },
             "distance": 1
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "Way to CC5",
           "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "class": "ImageResourceLevel",
                "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "inertia": false,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 850,
                  "width": 850,
                  "class": "ImageResourceLevel",
                  "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                 }
                ]
               },
               "hfov": 60,
               "id": "panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_tcap0",
               "angle": 0
              },
              {
               "maps": [
                {
                 "offsetY": 70.81,
                 "width": 141.61,
                 "class": "FlatHotspotPanoramaOverlayMap",
                 "yaw": -87.06,
                 "height": 141.61,
                 "offsetX": 70.81,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -18.38
                }
               ],
               "class": "FlatHotspotPanoramaOverlay",
               "useHandCursor": true,
               "rollOverDisplay": false,
               "id": "overlay_347F4891_2D38_DB62_41B0_1E6FA9F2CE0A",
               "areas": [
                {
                 "class": "FlatHotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 22)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "FlatHotspotPanoramaOverlayImage",
                 "offsetX": 70.81,
                 "yaw": -87.06,
                 "offsetY": 70.81,
                 "width": 141.61,
                 "height": 141.61,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 141,
                    "width": 141,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_0_0.gif"
                   }
                  ]
                 },
                 "pitch": -18.38
                }
               ]
              },
              {
               "maps": [
                {
                 "offsetY": 70.81,
                 "width": 141.61,
                 "class": "FlatHotspotPanoramaOverlayMap",
                 "yaw": 2.99,
                 "height": 141.61,
                 "offsetX": 70.81,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -17.21
                }
               ],
               "class": "FlatHotspotPanoramaOverlay",
               "useHandCursor": true,
               "rollOverDisplay": false,
               "id": "overlay_37606AB9_2D3F_7CA2_41B8_6B9577923E41",
               "areas": [
                {
                 "class": "FlatHotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF, this.camera_3F337662_305B_931A_419A_240FA10C7AFC); this.mainPlayList.set('selectedIndex', 19)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "FlatHotspotPanoramaOverlayImage",
                 "offsetX": 70.81,
                 "yaw": 2.99,
                 "offsetY": 70.81,
                 "width": 141.61,
                 "height": 141.61,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 141,
                    "width": 141,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_1_0.gif"
                   }
                  ]
                 },
                 "pitch": -17.21
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 35.59,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 33,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_2_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -83.39,
                 "pitch": -27.2
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "rollOverDisplay": false,
               "id": "overlay_37433159_2D3F_ADE2_41A6_3A91598E1A80",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3DC53593_2D68_D566_41A2_BD7032EE4536, this.camera_3F46A668_305B_9316_41B2_0FCFAEC8BF2F); this.mainPlayList.set('selectedIndex', 22)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 35.59,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -83.39,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 339,
                    "width": 715,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -27.2
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 36.58,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 20,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_3_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 13.3,
                 "pitch": -33.96
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "rollOverDisplay": false,
               "id": "overlay_224154B7_2FA8_977A_41B6_0A8615B3AF36",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 36.58,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 13.3,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 613,
                    "width": 788,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -33.96
                }
               ]
              }
             ]
            }
           ],
           "vfov": 180,
           "hfovMax": 120
          },
          "distance": 1
         },
         {
          "backwardYaw": 8.55,
          "class": "AdjacentPanorama",
          "yaw": -89.12,
          "panorama": {
           "audios": [
            {
             "autoplay": true,
             "class": "PanoramaAudio",
             "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
             "id": "audio_2279311B_2FAA_D5E1_4184_109B0FB01661"
            }
           ],
           "thumbnailUrl": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_t.jpg",
           "hfov": 360,
           "id": "panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA",
           "pitch": 0,
           "hfovMin": 60,
           "adjacentPanoramas": [
            {
             "backwardYaw": -89.12,
             "class": "AdjacentPanorama",
             "yaw": 8.55,
             "panorama": "this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF",
             "distance": 1
            },
            {
             "backwardYaw": -11.91,
             "class": "AdjacentPanorama",
             "yaw": -175.26,
             "panorama": {
              "audios": [
               {
                "autoplay": true,
                "class": "PanoramaAudio",
                "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                "id": "audio_23642C00_2FAE_F3DF_4188_AA3D7BBBB0C0"
               }
              ],
              "thumbnailUrl": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_t.jpg",
              "hfov": 360,
              "id": "panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97",
              "pitch": 0,
              "hfovMin": 99,
              "adjacentPanoramas": [
               {
                "backwardYaw": 169.57,
                "class": "AdjacentPanorama",
                "yaw": 166.76,
                "panorama": {
                 "audios": [
                  {
                   "autoplay": true,
                   "class": "PanoramaAudio",
                   "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                   "id": "audio_234BEDED_2FAF_4C21_41B4_C1152F13889C"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_t.jpg",
                 "hfov": 360,
                 "id": "panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4",
                 "pitch": 0,
                 "hfovMin": 60,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": 166.76,
                   "class": "AdjacentPanorama",
                   "yaw": 169.57,
                   "panorama": "this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97",
                   "distance": 1
                  },
                  {
                   "backwardYaw": 172.83,
                   "class": "AdjacentPanorama",
                   "yaw": 24.33,
                   "panorama": {
                    "audios": [
                     {
                      "autoplay": true,
                      "class": "PanoramaAudio",
                      "audio": {
                       "class": "AudioResource",
                       "oggUrl": "media/audio_22AE9859_2FA9_9F37_41C0_899DAEFB5DCF.ogg",
                       "mp3Url": "media/audio_22AE9859_2FA9_9F37_41C0_899DAEFB5DCF.mp3"
                      },
                      "id": "audio_22AE9859_2FA9_9F37_41C0_899DAEFB5DCF"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_t.jpg",
                    "hfov": 360,
                    "id": "panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5",
                    "pitch": 0,
                    "hfovMin": 120,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 24.33,
                      "class": "AdjacentPanorama",
                      "yaw": 172.83,
                      "panorama": "this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4",
                      "distance": 1
                     }
                    ],
                    "class": "Panorama",
                    "partial": false,
                    "label": "Innovation Hub",
                    "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3217,
                         "width": 6434,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "inertia": false,
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "height": 850,
                           "width": 850,
                           "class": "ImageResourceLevel",
                           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                          }
                         ]
                        },
                        "hfov": 64.8,
                        "id": "panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_tcap0",
                        "angle": 0
                       },
                       {
                        "maps": [
                         {
                          "hfov": 10.33,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 113,
                             "width": 103,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_0_HS_0_0_0_map.gif"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 172.83,
                          "pitch": -27.06
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "id": "overlay_237EBAEA_2CF0_E443_417D_58C61FC99E6E",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4, this.camera_3ED1B61D_305B_932E_41C5_777A85907899); this.mainPlayList.set('selectedIndex', 2)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "hfov": 10.33,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 172.83,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 226,
                             "width": 207,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_0_HS_0_0.png"
                            }
                           ]
                          },
                          "pitch": -27.06
                         }
                        ]
                       }
                      ]
                     }
                    ],
                    "vfov": 180,
                    "hfovMax": 120
                   },
                   "distance": 1
                  },
                  {
                   "backwardYaw": -70.8,
                   "class": "AdjacentPanorama",
                   "yaw": -4.97,
                   "panorama": {
                    "audios": [
                     {
                      "autoplay": true,
                      "class": "PanoramaAudio",
                      "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                      "id": "audio_2375020C_2FAF_B7E7_41AF_78F06B760C7E"
                     }
                    ],
                    "thumbnailUrl": "media/panorama_37259611_27D1_394E_4185_29297B435B99_t.jpg",
                    "hfov": 360,
                    "id": "panorama_37259611_27D1_394E_4185_29297B435B99",
                    "pitch": 0,
                    "hfovMin": 60,
                    "adjacentPanoramas": [
                     {
                      "backwardYaw": 174.37,
                      "class": "AdjacentPanorama",
                      "yaw": 18.16,
                      "panorama": {
                       "audios": [
                        {
                         "autoplay": true,
                         "class": "PanoramaAudio",
                         "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                         "id": "audio_228C4166_2FAF_D423_4196_447FDFD6DB1F"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_t.jpg",
                       "hfov": 360,
                       "id": "panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20",
                       "pitch": 0,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 18.16,
                         "class": "AdjacentPanorama",
                         "yaw": 174.37,
                         "panorama": "this.panorama_37259611_27D1_394E_4185_29297B435B99",
                         "distance": 1
                        },
                        {
                         "backwardYaw": 100.18,
                         "class": "AdjacentPanorama",
                         "yaw": -94.13,
                         "panorama": {
                          "audios": [
                           {
                            "autoplay": true,
                            "class": "PanoramaAudio",
                            "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                            "id": "audio_2292B498_2FAF_7CEE_41C1_6C1D7227D2E2"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_t.jpg",
                          "hfov": 360,
                          "id": "panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30",
                          "pitch": 0,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": -91.8,
                            "class": "AdjacentPanorama",
                            "yaw": -144.93,
                            "panorama": {
                             "audios": [
                              {
                               "autoplay": true,
                               "class": "PanoramaAudio",
                               "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                               "id": "audio_22213E85_2FA9_CCE6_41C4_587305F5551F"
                              }
                             ],
                             "thumbnailUrl": "media/panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_t.jpg",
                             "hfov": 360,
                             "id": "panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9",
                             "pitch": 0,
                             "hfovMin": 120,
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": -144.93,
                               "class": "AdjacentPanorama",
                               "yaw": -91.8,
                               "panorama": "this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30",
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "partial": false,
                             "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_t.jpg",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3217,
                                  "width": 6434,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9.jpeg"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "inertia": false,
                                 "class": "TripodCapPanoramaOverlay",
                                 "rotate": false,
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 850,
                                    "width": 850,
                                    "class": "ImageResourceLevel",
                                    "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                                   }
                                  ]
                                 },
                                 "hfov": 51.6,
                                 "id": "panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_tcap0",
                                 "angle": 0
                                },
                                {
                                 "maps": [
                                  {
                                   "hfov": 13.82,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 114,
                                      "width": 128,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -91.8,
                                   "pitch": -16.52
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_232505A5_2CD0_ECC1_41C1_34DE7CF2F6EF",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30, this.camera_3F00D649_305B_9316_41B7_03E65D88D6FD); this.mainPlayList.set('selectedIndex', 6)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "hfov": 13.82,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -91.8,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 228,
                                      "width": 257,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -16.52
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "label": "ITP_G07",
                             "vfov": 180,
                             "hfovMax": 120
                            },
                            "distance": 1
                           },
                           {
                            "backwardYaw": -94.13,
                            "class": "AdjacentPanorama",
                            "yaw": 100.18,
                            "panorama": "this.panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20",
                            "distance": 1
                           },
                           {
                            "backwardYaw": 75.33,
                            "class": "AdjacentPanorama",
                            "yaw": -55.84,
                            "panorama": {
                             "audios": [
                              {
                               "autoplay": true,
                               "class": "PanoramaAudio",
                               "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                               "id": "audio_2239C1C8_2FA9_D46F_41A6_D86A00774BFF"
                              }
                             ],
                             "thumbnailUrl": "media/panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_t.jpg",
                             "hfov": 360,
                             "id": "panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD",
                             "pitch": 0,
                             "hfovMin": 120,
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": -55.84,
                               "class": "AdjacentPanorama",
                               "yaw": 75.33,
                               "panorama": "this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30",
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "partial": false,
                             "label": "ITP_G09",
                             "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_t.jpg",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3217,
                                  "width": 6434,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD.jpeg"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "inertia": false,
                                 "class": "TripodCapPanoramaOverlay",
                                 "rotate": false,
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 850,
                                    "width": 850,
                                    "class": "ImageResourceLevel",
                                    "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                                   }
                                  ]
                                 },
                                 "hfov": 48,
                                 "id": "panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_tcap0",
                                 "angle": 0
                                },
                                {
                                 "maps": [
                                  {
                                   "hfov": 8,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 87,
                                      "width": 72,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 75.33,
                                   "pitch": -9.04
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_3DC1DD46_2CD0_1C43_41A4_4CDAAD8F47DC",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30, this.camera_3F8BF52C_305B_916E_41C2_41E51369B03D); this.mainPlayList.set('selectedIndex', 6)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "hfov": 8,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 75.33,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 174,
                                      "width": 144,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -9.04
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "vfov": 180,
                             "hfovMax": 120
                            },
                            "distance": 1
                           },
                           {
                            "backwardYaw": -94.41,
                            "class": "AdjacentPanorama",
                            "yaw": 92.08,
                            "panorama": {
                             "audios": [
                              {
                               "autoplay": true,
                               "class": "PanoramaAudio",
                               "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                               "id": "audio_22569882_2FA9_B4E3_41C0_50A1959294D4"
                              }
                             ],
                             "thumbnailUrl": "media/panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_t.jpg",
                             "hfov": 360,
                             "id": "panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242",
                             "pitch": 0,
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": 92.08,
                               "class": "AdjacentPanorama",
                               "yaw": -94.41,
                               "panorama": "this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30",
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "partial": false,
                             "label": "ITP_G10",
                             "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_t.jpg",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3217,
                                  "width": 6434,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242.jpeg"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "inertia": false,
                                 "class": "TripodCapPanoramaOverlay",
                                 "rotate": false,
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 850,
                                    "width": 850,
                                    "class": "ImageResourceLevel",
                                    "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                                   }
                                  ]
                                 },
                                 "hfov": 50.4,
                                 "id": "panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_tcap0",
                                 "angle": 0
                                },
                                {
                                 "maps": [
                                  {
                                   "hfov": 10.12,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 92,
                                      "width": 92,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": -94.41,
                                   "pitch": -10.69
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_3D53F00D_2CD0_23C1_41BA_59059F41968E",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30, this.camera_3EECF630_305B_9376_415D_5BCC647820F0); this.mainPlayList.set('selectedIndex', 6)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "hfov": 10.12,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": -94.41,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 184,
                                      "width": 184,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -10.69
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "vfov": 180,
                             "hfovMax": 120
                            },
                            "distance": 1
                           },
                           {
                            "backwardYaw": 96.6,
                            "class": "AdjacentPanorama",
                            "yaw": -170.87,
                            "panorama": "this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA",
                            "distance": 1
                           }
                          ],
                          "class": "Panorama",
                          "partial": false,
                          "label": "WAT TO G10,STAFF ROOMS",
                          "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_t.jpg",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3217,
                               "width": 6434,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30.jpeg"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "maps": [
                               {
                                "hfov": 9.83,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 92,
                                   "width": 92,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -55.84,
                                "pitch": -17.35
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "id": "overlay_3B346F62_2D50_7C43_41C5_94ADE53F62CB",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD, this.camera_3F7574FE_305B_90EA_41C1_0197007F0C3F); this.mainPlayList.set('selectedIndex', 14)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "hfov": 9.83,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -55.84,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 184,
                                   "width": 184,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -17.35
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "hfov": 9.82,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 92,
                                   "width": 92,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_1_0_0_map.gif"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -144.93,
                                "pitch": -17.55
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "id": "overlay_3B5F90BC_2D50_24C7_41A9_2A253F735F25",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9, this.camera_3F58E4E7_305B_971A_41BC_88A0696963C9); this.mainPlayList.set('selectedIndex', 13)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "hfov": 9.82,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -144.93,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 184,
                                   "width": 184,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -17.55
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "hfov": 10.26,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 92,
                                   "width": 92,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": 92.08,
                                "pitch": -4.58
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "id": "overlay_38E38DBD_2D50_3CC1_41B2_4D1E4F0EB6E6",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242, this.camera_3F7D3510_305B_9135_41A4_4E45BC8D609C); this.mainPlayList.set('selectedIndex', 15)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "hfov": 10.26,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": 92.08,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 184,
                                   "width": 184,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "pitch": -4.58
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "offsetY": 70.81,
                                "width": 141.61,
                                "class": "FlatHotspotPanoramaOverlayMap",
                                "yaw": 100.18,
                                "height": 141.61,
                                "offsetX": 70.81,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_3_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -27.44
                               }
                              ],
                              "class": "FlatHotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "id": "overlay_38FF076A_2D50_6C43_41C0_BE8B8DFF888E",
                              "areas": [
                               {
                                "class": "FlatHotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20, this.camera_3F6184ED_305B_90EE_41C3_6EFA9DC498C3); this.mainPlayList.set('selectedIndex', 5)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "FlatHotspotPanoramaOverlayImage",
                                "offsetX": 70.81,
                                "yaw": 100.18,
                                "offsetY": 70.81,
                                "width": 141.61,
                                "height": 141.61,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 141,
                                   "width": 141,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_3_0.gif"
                                  }
                                 ]
                                },
                                "pitch": -27.44
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "offsetY": 70.81,
                                "width": 141.61,
                                "class": "FlatHotspotPanoramaOverlayMap",
                                "yaw": -170.87,
                                "height": 141.61,
                                "offsetX": 70.81,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 16,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_4_0_map.gif"
                                  }
                                 ]
                                },
                                "pitch": -21.88
                               }
                              ],
                              "class": "FlatHotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "id": "overlay_3A246807_2D70_63C1_41BD_B0B734CD5456",
                              "areas": [
                               {
                                "class": "FlatHotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA, this.camera_3F83551A_305B_912A_41C5_C5911483A06D); this.mainPlayList.set('selectedIndex', 18)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "class": "FlatHotspotPanoramaOverlayImage",
                                "offsetX": 70.81,
                                "yaw": -170.87,
                                "offsetY": 70.81,
                                "width": 141.61,
                                "height": 141.61,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 141,
                                   "width": 141,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_4_0.gif"
                                  }
                                 ]
                                },
                                "pitch": -21.88
                               }
                              ]
                             },
                             {
                              "inertia": false,
                              "class": "TripodCapPanoramaOverlay",
                              "rotate": false,
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 850,
                                 "width": 850,
                                 "class": "ImageResourceLevel",
                                 "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                                }
                               ]
                              },
                              "hfov": 48,
                              "id": "panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_tcap0",
                              "angle": 0
                             }
                            ]
                           }
                          ],
                          "vfov": 180,
                          "hfovMax": 120
                         },
                         "distance": 1
                        }
                       ],
                       "class": "Panorama",
                       "partial": false,
                       "label": "WAY TO SVG SIR CABIN,HOD OFFICE",
                       "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_t.jpg",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3217,
                            "width": 6434,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20.jpeg"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "maps": [
                            {
                             "offsetY": 70.81,
                             "width": 141.61,
                             "class": "FlatHotspotPanoramaOverlayMap",
                             "yaw": -94.13,
                             "height": 141.61,
                             "offsetX": 70.81,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_0_HS_1_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -22.57
                            }
                           ],
                           "class": "FlatHotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "id": "overlay_3B84FE02_2D70_1FC0_41C3_7765D4DCB6A6",
                           "areas": [
                            {
                             "class": "FlatHotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30, this.camera_3EC0A609_305B_9316_41B2_DD2C9D1705B2); this.mainPlayList.set('selectedIndex', 6)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "class": "FlatHotspotPanoramaOverlayImage",
                             "offsetX": 70.81,
                             "yaw": -94.13,
                             "offsetY": 70.81,
                             "width": 141.61,
                             "height": 141.61,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 141,
                                "width": 141,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_0_HS_1_0.gif"
                               }
                              ]
                             },
                             "pitch": -22.57
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "offsetY": 70.81,
                             "width": 141.61,
                             "class": "FlatHotspotPanoramaOverlayMap",
                             "yaw": 174.37,
                             "height": 141.61,
                             "offsetX": 70.81,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_0_HS_2_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -24.01
                            }
                           ],
                           "class": "FlatHotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "id": "overlay_21F1E783_2D38_F567_41C6_22CE1262DD2A",
                           "areas": [
                            {
                             "class": "FlatHotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_37259611_27D1_394E_4185_29297B435B99, this.camera_3EC45603_305B_931B_41B8_E6A9BA9774A3); this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "class": "FlatHotspotPanoramaOverlayImage",
                             "offsetX": 70.81,
                             "yaw": 174.37,
                             "offsetY": 70.81,
                             "width": 141.61,
                             "height": 141.61,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 141,
                                "width": 141,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_0_HS_2_0.gif"
                               }
                              ]
                             },
                             "pitch": -24.01
                            }
                           ]
                          },
                          {
                           "inertia": false,
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "height": 850,
                              "width": 850,
                              "class": "ImageResourceLevel",
                              "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                             }
                            ]
                           },
                           "hfov": 48,
                           "id": "panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_tcap0",
                           "angle": 0
                          }
                         ]
                        }
                       ],
                       "vfov": 180,
                       "hfovMax": 120
                      },
                      "distance": 1
                     },
                     {
                      "backwardYaw": 143.55,
                      "class": "AdjacentPanorama",
                      "yaw": 119.99,
                      "panorama": {
                       "audios": [
                        {
                         "autoplay": true,
                         "class": "PanoramaAudio",
                         "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                         "id": "audio_236BC725_2FAF_DC21_41C5_F323241016DE"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_t.jpg",
                       "hfov": 360,
                       "id": "panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1",
                       "pitch": 0,
                       "hfovMin": 60,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": -115.21,
                         "class": "AdjacentPanorama",
                         "yaw": -6.76,
                         "panorama": {
                          "audios": [
                           {
                            "autoplay": true,
                            "class": "PanoramaAudio",
                            "audio": {
                             "class": "AudioResource",
                             "oggUrl": "media/audio_2309F02C_2FB7_8F6E_41A7_0EB34FB20754.ogg",
                             "mp3Url": "media/audio_2309F02C_2FB7_8F6E_41A7_0EB34FB20754.mp3"
                            },
                            "id": "audio_2309F02C_2FB7_8F6E_41A7_0EB34FB20754"
                           }
                          ],
                          "thumbnailUrl": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_t.jpg",
                          "hfov": 360,
                          "id": "panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5",
                          "pitch": 0,
                          "hfovMin": 60,
                          "adjacentPanoramas": [
                           {
                            "backwardYaw": 177.38,
                            "class": "AdjacentPanorama",
                            "yaw": -172,
                            "panorama": {
                             "audios": [
                              {
                               "autoplay": true,
                               "class": "PanoramaAudio",
                               "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                               "id": "audio_2275E3D7_2FA9_5462_41BC_590CC652C15C"
                              }
                             ],
                             "thumbnailUrl": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_t.jpg",
                             "hfov": 360,
                             "id": "panorama_2985A949_27E9_49EA_41C1_E3247DC3654B",
                             "pitch": 0,
                             "hfovMin": 60,
                             "adjacentPanoramas": [
                              {
                               "backwardYaw": -172,
                               "class": "AdjacentPanorama",
                               "yaw": 177.38,
                               "panorama": "this.panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5",
                               "distance": 1
                              }
                             ],
                             "class": "Panorama",
                             "partial": false,
                             "label": "AudienceView of Seminar_hall",
                             "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                             "frames": [
                              {
                               "class": "SphericPanoramaFrame",
                               "thumbnailUrl": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_t.jpg",
                               "sphere": {
                                "class": "ImageResource",
                                "levels": [
                                 {
                                  "height": 3217,
                                  "width": 6434,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_hq.jpeg"
                                 },
                                 {
                                  "height": 1608,
                                  "width": 3217,
                                  "class": "ImageResourceLevel",
                                  "url": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B.jpeg"
                                 }
                                ]
                               },
                               "overlays": [
                                {
                                 "inertia": false,
                                 "class": "TripodCapPanoramaOverlay",
                                 "rotate": false,
                                 "image": {
                                  "class": "ImageResource",
                                  "levels": [
                                   {
                                    "height": 850,
                                    "width": 850,
                                    "class": "ImageResourceLevel",
                                    "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                                   }
                                  ]
                                 },
                                 "hfov": 45,
                                 "id": "panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_tcap0",
                                 "angle": 0
                                },
                                {
                                 "maps": [
                                  {
                                   "hfov": 10.14,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 92,
                                      "width": 92,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_0_HS_0_0_0_map.gif"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 120.15,
                                   "pitch": -10.07
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_3DCA32A3_2D69_ECA6_41B1_0A326B300A0B",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.mainPlayList.set('selectedIndex', 4)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "hfov": 10.14,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 120.15,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 184,
                                      "width": 184,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_0_HS_0_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -10.07
                                  }
                                 ]
                                },
                                {
                                 "maps": [
                                  {
                                   "hfov": 14.48,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 16,
                                      "width": 33,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_0_HS_1_0_map.gif"
                                     }
                                    ]
                                   },
                                   "class": "HotspotPanoramaOverlayMap",
                                   "yaw": 177.38,
                                   "pitch": -2.13
                                  }
                                 ],
                                 "class": "HotspotPanoramaOverlay",
                                 "useHandCursor": true,
                                 "rollOverDisplay": false,
                                 "id": "overlay_3DEADD69_2D6B_B5A2_41C4_FDB513C41648",
                                 "areas": [
                                  {
                                   "class": "HotspotPanoramaOverlayArea",
                                   "click": "this.startPanoramaWithCamera(this.panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5, this.camera_3F50A4E0_305B_9716_41A1_DC9C92DA77B0); this.mainPlayList.set('selectedIndex', 16)",
                                   "mapColor": "#FF0000"
                                  }
                                 ],
                                 "enabledInCardboard": true,
                                 "items": [
                                  {
                                   "hfov": 14.48,
                                   "class": "HotspotPanoramaOverlayImage",
                                   "yaw": 177.38,
                                   "image": {
                                    "class": "ImageResource",
                                    "levels": [
                                     {
                                      "height": 123,
                                      "width": 258,
                                      "class": "ImageResourceLevel",
                                      "url": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_0_HS_1_0.png"
                                     }
                                    ]
                                   },
                                   "pitch": -2.13
                                  }
                                 ]
                                }
                               ]
                              }
                             ],
                             "vfov": 180,
                             "hfovMax": 120
                            },
                            "distance": 1
                           },
                           {
                            "backwardYaw": -6.76,
                            "class": "AdjacentPanorama",
                            "yaw": -115.21,
                            "panorama": "this.panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1",
                            "distance": 1
                           }
                          ],
                          "class": "Panorama",
                          "partial": false,
                          "label": "StageView of Seminar_hall",
                          "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                          "frames": [
                           {
                            "class": "SphericPanoramaFrame",
                            "thumbnailUrl": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_t.jpg",
                            "sphere": {
                             "class": "ImageResource",
                             "levels": [
                              {
                               "height": 3217,
                               "width": 6434,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_hq.jpeg"
                              },
                              {
                               "height": 1608,
                               "width": 3217,
                               "class": "ImageResourceLevel",
                               "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5.jpeg"
                              }
                             ]
                            },
                            "overlays": [
                             {
                              "inertia": false,
                              "class": "TripodCapPanoramaOverlay",
                              "rotate": false,
                              "image": {
                               "class": "ImageResource",
                               "levels": [
                                {
                                 "height": 850,
                                 "width": 850,
                                 "class": "ImageResourceLevel",
                                 "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                                }
                               ]
                              },
                              "hfov": 48,
                              "id": "panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_tcap0",
                              "angle": 0
                             },
                             {
                              "maps": [
                               {
                                "hfov": 9.23,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 57,
                                   "width": 86,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_0_HS_0_0_0_map.gif"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -180.39,
                                "pitch": -17
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "id": "overlay_22FBF3CD_2D58_ACE3_41C6_48F28D60F13B",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.mainPlayList.set('selectedIndex', 17)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "hfov": 9.23,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -180.39,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 115,
                                   "width": 172,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_0_HS_0_0.png"
                                  }
                                 ]
                                },
                                "pitch": -17
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "hfov": 26.8,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 16,
                                   "width": 85,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_0_HS_1_0_map.gif"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -172,
                                "pitch": -22.35
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "id": "overlay_23B1C687_2D5F_D76F_4190_8537E95EA322",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_2985A949_27E9_49EA_41C1_E3247DC3654B, this.camera_3EB1B5F6_305B_90FA_41C6_FFE6C6885F6B); this.mainPlayList.set('selectedIndex', 17)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "hfov": 26.8,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -172,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 97,
                                   "width": 517,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_0_HS_1_0.png"
                                  }
                                 ]
                                },
                                "pitch": -22.35
                               }
                              ]
                             },
                             {
                              "maps": [
                               {
                                "hfov": 9.05,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 77,
                                   "width": 82,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_0_HS_2_0_0_map.gif"
                                  }
                                 ]
                                },
                                "class": "HotspotPanoramaOverlayMap",
                                "yaw": -115.21,
                                "pitch": -10.21
                               }
                              ],
                              "class": "HotspotPanoramaOverlay",
                              "useHandCursor": true,
                              "rollOverDisplay": false,
                              "id": "overlay_22B3C43E_2D5B_6B9E_4179_FB6952396DC8",
                              "areas": [
                               {
                                "class": "HotspotPanoramaOverlayArea",
                                "click": "this.startPanoramaWithCamera(this.panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1, this.camera_3EBA45FC_305B_90EE_41C1_A7E7EC8C4A16); this.mainPlayList.set('selectedIndex', 4)",
                                "mapColor": "#FF0000"
                               }
                              ],
                              "enabledInCardboard": true,
                              "items": [
                               {
                                "hfov": 9.05,
                                "class": "HotspotPanoramaOverlayImage",
                                "yaw": -115.21,
                                "image": {
                                 "class": "ImageResource",
                                 "levels": [
                                  {
                                   "height": 154,
                                   "width": 164,
                                   "class": "ImageResourceLevel",
                                   "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_0_HS_2_0.png"
                                  }
                                 ]
                                },
                                "pitch": -10.21
                               }
                              ]
                             }
                            ]
                           }
                          ],
                          "vfov": 180,
                          "hfovMax": 120
                         },
                         "distance": 1
                        },
                        {
                         "backwardYaw": 119.99,
                         "class": "AdjacentPanorama",
                         "yaw": 143.55,
                         "panorama": "this.panorama_37259611_27D1_394E_4185_29297B435B99",
                         "distance": 1
                        }
                       ],
                       "class": "Panorama",
                       "partial": false,
                       "label": "WAY TO SEMINAR HALL",
                       "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_t.jpg",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3217,
                            "width": 6434,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1.jpeg"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "inertia": false,
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "height": 850,
                              "width": 850,
                              "class": "ImageResourceLevel",
                              "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                             }
                            ]
                           },
                           "hfov": 48,
                           "id": "panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_tcap0",
                           "angle": 0
                          },
                          {
                           "maps": [
                            {
                             "hfov": 15.66,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 123,
                                "width": 141,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": -6.76,
                             "pitch": -7.19
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "id": "overlay_3FD9520E_2FB9_57E3_4187_90889FBDA9FF",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5, this.camera_3EF66636_305B_937A_4193_BCD650031B98); this.mainPlayList.set('selectedIndex', 16)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "hfov": 15.66,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": -6.76,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 247,
                                "width": 282,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -7.19
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "offsetY": 52.1,
                             "width": 104.2,
                             "class": "FlatHotspotPanoramaOverlayMap",
                             "yaw": 141.53,
                             "height": 104.2,
                             "offsetX": 52.1,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 16,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_0_HS_1_0_map.gif"
                               }
                              ]
                             },
                             "pitch": -25.28
                            }
                           ],
                           "class": "FlatHotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "id": "overlay_3FEB4F5A_2FB9_4C62_41BE_943C31B33279",
                           "areas": [
                            {
                             "class": "FlatHotspotPanoramaOverlayArea",
                             "click": "this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "class": "FlatHotspotPanoramaOverlayImage",
                             "offsetX": 52.1,
                             "yaw": 141.53,
                             "offsetY": 52.1,
                             "width": 104.2,
                             "height": 104.2,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 104,
                                "width": 104,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_0_HS_1_0.gif"
                               }
                              ]
                             },
                             "pitch": -25.28
                            }
                           ]
                          },
                          {
                           "maps": [
                            {
                             "hfov": 16.77,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 16,
                                "width": 30,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_0_HS_2_0_map.gif"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 143.55,
                             "pitch": -29.21
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "id": "overlay_3F4D8E63_2FA6_CC22_41B8_2F96721D1A00",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_37259611_27D1_394E_4185_29297B435B99, this.camera_3EF1E63D_305B_936F_4190_2A5FE98F827E); this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "hfov": 16.77,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 143.55,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 181,
                                "width": 343,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_0_HS_2_0.png"
                               }
                              ]
                             },
                             "pitch": -29.21
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "vfov": 180,
                       "hfovMax": 120
                      },
                      "distance": 1
                     },
                     {
                      "backwardYaw": -4.97,
                      "class": "AdjacentPanorama",
                      "yaw": -70.8,
                      "panorama": "this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4",
                      "distance": 1
                     },
                     {
                      "backwardYaw": 87.89,
                      "class": "AdjacentPanorama",
                      "yaw": 131.61,
                      "panorama": {
                       "audios": [
                        {
                         "autoplay": true,
                         "class": "PanoramaAudio",
                         "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                         "id": "audio_22BEA209_2FAE_F7EE_41C0_8DFA69162F07"
                        }
                       ],
                       "thumbnailUrl": "media/panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_t.jpg",
                       "hfov": 360,
                       "id": "panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76",
                       "pitch": 0,
                       "hfovMin": 131,
                       "adjacentPanoramas": [
                        {
                         "backwardYaw": 131.61,
                         "class": "AdjacentPanorama",
                         "yaw": 87.89,
                         "panorama": "this.panorama_37259611_27D1_394E_4185_29297B435B99",
                         "distance": 1
                        }
                       ],
                       "class": "Panorama",
                       "partial": false,
                       "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                       "frames": [
                        {
                         "class": "SphericPanoramaFrame",
                         "thumbnailUrl": "media/panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_t.jpg",
                         "sphere": {
                          "class": "ImageResource",
                          "levels": [
                           {
                            "height": 3217,
                            "width": 6434,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_hq.jpeg"
                           },
                           {
                            "height": 1608,
                            "width": 3217,
                            "class": "ImageResourceLevel",
                            "url": "media/panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76.jpeg"
                           }
                          ]
                         },
                         "overlays": [
                          {
                           "inertia": false,
                           "class": "TripodCapPanoramaOverlay",
                           "rotate": false,
                           "image": {
                            "class": "ImageResource",
                            "levels": [
                             {
                              "height": 850,
                              "width": 850,
                              "class": "ImageResourceLevel",
                              "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                             }
                            ]
                           },
                           "hfov": 64.8,
                           "id": "panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_tcap0",
                           "angle": 0
                          },
                          {
                           "maps": [
                            {
                             "hfov": 10.07,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 92,
                                "width": 92,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_0_HS_0_0_0_map.gif"
                               }
                              ]
                             },
                             "class": "HotspotPanoramaOverlayMap",
                             "yaw": 87.89,
                             "pitch": -12.06
                            }
                           ],
                           "class": "HotspotPanoramaOverlay",
                           "useHandCursor": true,
                           "rollOverDisplay": false,
                           "id": "overlay_226B4BDF_2CF0_2440_41BF_B3E1001A7C4C",
                           "areas": [
                            {
                             "class": "HotspotPanoramaOverlayArea",
                             "click": "this.startPanoramaWithCamera(this.panorama_37259611_27D1_394E_4185_29297B435B99, this.camera_3EAA75E9_305B_9116_41BC_91871A328081); this.mainPlayList.set('selectedIndex', 3)",
                             "mapColor": "#FF0000"
                            }
                           ],
                           "enabledInCardboard": true,
                           "items": [
                            {
                             "hfov": 10.07,
                             "class": "HotspotPanoramaOverlayImage",
                             "yaw": 87.89,
                             "image": {
                              "class": "ImageResource",
                              "levels": [
                               {
                                "height": 184,
                                "width": 184,
                                "class": "ImageResourceLevel",
                                "url": "media/panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_0_HS_0_0.png"
                               }
                              ]
                             },
                             "pitch": -12.06
                            }
                           ]
                          }
                         ]
                        }
                       ],
                       "label": "ITP_G01",
                       "vfov": 180,
                       "hfovMax": 131
                      },
                      "distance": 1
                     }
                    ],
                    "class": "Panorama",
                    "partial": false,
                    "label": "WAY TO HOD OFFICE",
                    "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                    "frames": [
                     {
                      "class": "SphericPanoramaFrame",
                      "thumbnailUrl": "media/panorama_37259611_27D1_394E_4185_29297B435B99_t.jpg",
                      "sphere": {
                       "class": "ImageResource",
                       "levels": [
                        {
                         "height": 3217,
                         "width": 6434,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_hq.jpeg"
                        },
                        {
                         "height": 1608,
                         "width": 3217,
                         "class": "ImageResourceLevel",
                         "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99.jpeg"
                        }
                       ]
                      },
                      "overlays": [
                       {
                        "maps": [
                         {
                          "offsetY": 70.81,
                          "width": 141.61,
                          "class": "FlatHotspotPanoramaOverlayMap",
                          "yaw": 18.16,
                          "height": 141.61,
                          "offsetX": 70.81,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_2_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -13.37
                         }
                        ],
                        "class": "FlatHotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "id": "overlay_3E273727_2D50_2DC0_41B6_5F4E29232441",
                        "areas": [
                         {
                          "class": "FlatHotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20, this.camera_3F91853E_305B_916A_41BD_3024BAF8AA82); this.mainPlayList.set('selectedIndex', 5)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "FlatHotspotPanoramaOverlayImage",
                          "offsetX": 70.81,
                          "yaw": 18.16,
                          "offsetY": 70.81,
                          "width": 141.61,
                          "height": 141.61,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 141,
                             "width": 141,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_2_0.gif"
                            }
                           ]
                          },
                          "pitch": -13.37
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "offsetY": 70.81,
                          "width": 141.61,
                          "class": "FlatHotspotPanoramaOverlayMap",
                          "yaw": -70.8,
                          "height": 141.61,
                          "offsetX": 70.81,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_3_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -22.5
                         }
                        ],
                        "class": "FlatHotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "id": "overlay_39221C2F_2D50_E3C1_41C2_09BF2921E7EC",
                        "areas": [
                         {
                          "class": "FlatHotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4, this.camera_3FAC955B_305B_912A_41C7_AA7B5252F75C); this.mainPlayList.set('selectedIndex', 2)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "FlatHotspotPanoramaOverlayImage",
                          "offsetX": 70.81,
                          "yaw": -70.8,
                          "offsetY": 70.81,
                          "width": 141.61,
                          "height": 141.61,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 141,
                             "width": 141,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_3_0.gif"
                            }
                           ]
                          },
                          "pitch": -22.5
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "offsetY": 70.81,
                          "width": 141.61,
                          "class": "FlatHotspotPanoramaOverlayMap",
                          "yaw": 109.51,
                          "height": 141.61,
                          "offsetX": 70.81,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 16,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_4_0_map.gif"
                            }
                           ]
                          },
                          "pitch": -25.59
                         }
                        ],
                        "class": "FlatHotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "id": "overlay_39813A0E_2D50_27C3_41B8_BC81C27798E0",
                        "areas": [
                         {
                          "class": "FlatHotspotPanoramaOverlayArea",
                          "click": "this.mainPlayList.set('selectedIndex', 4)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "class": "FlatHotspotPanoramaOverlayImage",
                          "offsetX": 70.81,
                          "yaw": 109.51,
                          "offsetY": 70.81,
                          "width": 141.61,
                          "height": 141.61,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 141,
                             "width": 141,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_4_0.gif"
                            }
                           ]
                          },
                          "pitch": -25.59
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "hfov": 9.75,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 92,
                             "width": 92,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_5_0_0_map.gif"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 131.61,
                          "pitch": -18.65
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "id": "overlay_397F68FC_2D50_2447_41AB_B57122C1587A",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76, this.camera_3FB3A569_305B_9117_41C5_AE4043BCB181); this.mainPlayList.set('selectedIndex', 8)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "hfov": 9.75,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 131.61,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 184,
                             "width": 184,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_5_0.png"
                            }
                           ]
                          },
                          "pitch": -18.65
                         }
                        ]
                       },
                       {
                        "maps": [
                         {
                          "hfov": 58.84,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 16,
                             "width": 104,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_6_0_map.gif"
                            }
                           ]
                          },
                          "class": "HotspotPanoramaOverlayMap",
                          "yaw": 119.99,
                          "pitch": -32.59
                         }
                        ],
                        "class": "HotspotPanoramaOverlay",
                        "useHandCursor": true,
                        "rollOverDisplay": false,
                        "id": "overlay_3835FF95_2D50_1CC1_4184_92ECCA0D3F5B",
                        "areas": [
                         {
                          "class": "HotspotPanoramaOverlayArea",
                          "click": "this.startPanoramaWithCamera(this.panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1, this.camera_3FA6F54A_305B_912A_4146_A2D8A879CBF2); this.mainPlayList.set('selectedIndex', 4)",
                          "mapColor": "#FF0000"
                         }
                        ],
                        "enabledInCardboard": true,
                        "items": [
                         {
                          "hfov": 58.84,
                          "class": "HotspotPanoramaOverlayImage",
                          "yaw": 119.99,
                          "image": {
                           "class": "ImageResource",
                           "levels": [
                            {
                             "height": 191,
                             "width": 1248,
                             "class": "ImageResourceLevel",
                             "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_6_0.png"
                            }
                           ]
                          },
                          "pitch": -32.59
                         }
                        ]
                       },
                       {
                        "inertia": false,
                        "class": "TripodCapPanoramaOverlay",
                        "rotate": false,
                        "image": {
                         "class": "ImageResource",
                         "levels": [
                          {
                           "height": 850,
                           "width": 850,
                           "class": "ImageResourceLevel",
                           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                          }
                         ]
                        },
                        "hfov": 48,
                        "id": "panorama_37259611_27D1_394E_4185_29297B435B99_tcap0",
                        "angle": 0
                       }
                      ]
                     }
                    ],
                    "vfov": 180,
                    "hfovMax": 120
                   },
                   "distance": 1
                  }
                 ],
                 "class": "Panorama",
                 "partial": false,
                 "label": "WAY TO INNOVATION HUB",
                 "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3217,
                      "width": 6434,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "maps": [
                      {
                       "hfov": 11.94,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 123,
                          "width": 109,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 24.33,
                       "pitch": -12.13
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "id": "overlay_37ECDA56_27D2_E9F2_41B3_63F3332DE3F0",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5, this.camera_3F4384D3_305B_973A_4197_72FD450183AA); this.mainPlayList.set('selectedIndex', 9)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "hfov": 11.94,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 24.33,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 247,
                          "width": 218,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -12.13
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "offsetY": 70.81,
                       "width": 141.61,
                       "class": "FlatHotspotPanoramaOverlayMap",
                       "yaw": -4.97,
                       "height": 141.61,
                       "offsetX": 70.81,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_2_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -19.14
                      }
                     ],
                     "class": "FlatHotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "id": "overlay_3CDC7AFC_2D30_2447_41C5_3B0E9144FE63",
                     "areas": [
                      {
                       "class": "FlatHotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_37259611_27D1_394E_4185_29297B435B99, this.camera_3F4B34DA_305B_972A_41AC_387E3618A839); this.mainPlayList.set('selectedIndex', 3)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "FlatHotspotPanoramaOverlayImage",
                       "offsetX": 70.81,
                       "yaw": -4.97,
                       "offsetY": 70.81,
                       "width": 141.61,
                       "height": 141.61,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 141,
                          "width": 141,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_2_0.gif"
                         }
                        ]
                       },
                       "pitch": -19.14
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "offsetY": 70.81,
                       "width": 141.61,
                       "class": "FlatHotspotPanoramaOverlayMap",
                       "yaw": 169.57,
                       "height": 141.61,
                       "offsetX": 70.81,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 16,
                          "width": 16,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_3_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -25.31
                      }
                     ],
                     "class": "FlatHotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "id": "overlay_3E02AE8F_2D30_7CC1_41B6_F5EC9B1D8FB8",
                     "areas": [
                      {
                       "class": "FlatHotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97, this.camera_3F38E4CC_305B_972E_41C6_F7A02A5571B8); this.mainPlayList.set('selectedIndex', 1)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "class": "FlatHotspotPanoramaOverlayImage",
                       "offsetX": 70.81,
                       "yaw": 169.57,
                       "offsetY": 70.81,
                       "width": 141.61,
                       "height": 141.61,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 141,
                          "width": 141,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_3_0.gif"
                         }
                        ]
                       },
                       "pitch": -25.31
                      }
                     ]
                    },
                    {
                     "maps": [
                      {
                       "hfov": 14.66,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 155,
                          "width": 131,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_4_0_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": -171.97,
                       "pitch": -3.35
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "id": "overlay_3E680043_2D30_2441_41C2_A6CBB11EF613",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.mainPlayList.set('selectedIndex', 7)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "hfov": 14.66,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -171.97,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 311,
                          "width": 262,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_4_0.png"
                         }
                        ]
                       },
                       "pitch": -3.35
                      }
                     ]
                    },
                    {
                     "inertia": false,
                     "class": "TripodCapPanoramaOverlay",
                     "rotate": false,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "height": 850,
                        "width": 850,
                        "class": "ImageResourceLevel",
                        "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                       }
                      ]
                     },
                     "hfov": 48,
                     "id": "panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_tcap0",
                     "angle": 0
                    }
                   ]
                  }
                 ],
                 "vfov": 180,
                 "hfovMax": 120
                },
                "distance": 1
               },
               {
                "backwardYaw": -175.26,
                "class": "AdjacentPanorama",
                "yaw": -11.91,
                "panorama": "this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA",
                "distance": 1
               },
               {
                "backwardYaw": 100.11,
                "class": "AdjacentPanorama",
                "yaw": -47.19,
                "panorama": {
                 "audios": [
                  {
                   "autoplay": true,
                   "class": "PanoramaAudio",
                   "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                   "id": "audio_22C6E070_2FA9_743F_41AE_274FD9EF9ED2"
                  }
                 ],
                 "thumbnailUrl": "media/panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_t.jpg",
                 "hfov": 360,
                 "id": "panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1",
                 "pitch": 0,
                 "hfovMin": 126,
                 "adjacentPanoramas": [
                  {
                   "backwardYaw": -47.19,
                   "class": "AdjacentPanorama",
                   "yaw": 100.11,
                   "panorama": "this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97",
                   "distance": 1
                  }
                 ],
                 "class": "Panorama",
                 "partial": false,
                 "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
                 "frames": [
                  {
                   "class": "SphericPanoramaFrame",
                   "thumbnailUrl": "media/panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_t.jpg",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 3217,
                      "width": 6434,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_hq.jpeg"
                     },
                     {
                      "height": 1608,
                      "width": 3217,
                      "class": "ImageResourceLevel",
                      "url": "media/panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "maps": [
                      {
                       "hfov": 10.06,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 92,
                          "width": 92,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "class": "HotspotPanoramaOverlayMap",
                       "yaw": 100.11,
                       "pitch": -12.27
                      }
                     ],
                     "class": "HotspotPanoramaOverlay",
                     "useHandCursor": true,
                     "rollOverDisplay": false,
                     "id": "overlay_3D145366_2C6D_1396_41B8_EC8901164EFF",
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97, this.camera_3ED74616_305B_933A_41C6_D4F4114EBFA1); this.mainPlayList.set('selectedIndex', 1)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "enabledInCardboard": true,
                     "items": [
                      {
                       "hfov": 10.06,
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 100.11,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 184,
                          "width": 184,
                          "class": "ImageResourceLevel",
                          "url": "media/panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -12.27
                      }
                     ]
                    },
                    {
                     "inertia": false,
                     "class": "TripodCapPanoramaOverlay",
                     "rotate": false,
                     "image": {
                      "class": "ImageResource",
                      "levels": [
                       {
                        "height": 850,
                        "width": 850,
                        "class": "ImageResourceLevel",
                        "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                       }
                      ]
                     },
                     "hfov": 49.2,
                     "id": "panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_tcap0",
                     "angle": 0
                    }
                   ]
                  }
                 ],
                 "label": "ITP_G03",
                 "vfov": 180,
                 "hfovMax": 126
                },
                "distance": 1
               }
              ],
              "class": "Panorama",
              "partial": false,
              "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3217,
                   "width": 6434,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "inertia": false,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 850,
                     "width": 850,
                     "class": "ImageResourceLevel",
                     "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                    }
                   ]
                  },
                  "hfov": 48,
                  "id": "panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_tcap0",
                  "angle": 0
                 },
                 {
                  "maps": [
                   {
                    "hfov": 11.43,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 145,
                       "width": 104,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -47.19,
                    "pitch": -11.51
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "id": "overlay_2882CE14_27D1_2976_4195_EF6187E34CD8",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1, this.camera_2006859A_305B_912A_41A4_7D9C62D01010); this.mainPlayList.set('selectedIndex', 10)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 11.43,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -47.19,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 291,
                       "width": 208,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -11.51
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "hfov": 3.71,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 39,
                       "width": 33,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -19.6,
                    "pitch": 0.26
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "id": "overlay_2322B831_2C75_1D8A_4191_F67EAECB479D",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 11)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 3.71,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -19.6,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 78,
                       "width": 66,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": 0.26
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "offsetY": 70.81,
                    "width": 141.61,
                    "class": "FlatHotspotPanoramaOverlayMap",
                    "yaw": -11.91,
                    "height": 141.61,
                    "offsetX": 70.81,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_2_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -26.62
                   }
                  ],
                  "class": "FlatHotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "id": "overlay_229FDC8A_2C77_1699_4177_AE36647836B1",
                  "areas": [
                   {
                    "class": "FlatHotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA, this.camera_3FF5C591_305B_9136_41A1_F37B1632E368); this.mainPlayList.set('selectedIndex', 18)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "FlatHotspotPanoramaOverlayImage",
                    "offsetX": 70.81,
                    "yaw": -11.91,
                    "offsetY": 70.81,
                    "width": 141.62,
                    "height": 141.62,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 141,
                       "width": 141,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_2_0.gif"
                      }
                     ]
                    },
                    "pitch": -26.62
                   }
                  ]
                 },
                 {
                  "maps": [
                   {
                    "offsetY": 70.81,
                    "width": 141.61,
                    "class": "FlatHotspotPanoramaOverlayMap",
                    "yaw": 166.76,
                    "height": 141.61,
                    "offsetX": 70.81,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "width": 16,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_4_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -22.36
                   }
                  ],
                  "class": "FlatHotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "id": "overlay_3F41C94B_2D30_2441_419E_728867919E3D",
                  "areas": [
                   {
                    "class": "FlatHotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4, this.camera_3FE3358A_305B_9115_41A7_FBA4E1AAF7F3); this.mainPlayList.set('selectedIndex', 2)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "class": "FlatHotspotPanoramaOverlayImage",
                    "offsetX": 70.81,
                    "yaw": 166.76,
                    "offsetY": 70.81,
                    "width": 141.61,
                    "height": 141.61,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 141,
                       "width": 141,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_4_0.gif"
                      }
                     ]
                    },
                    "pitch": -22.36
                   }
                  ]
                 }
                ]
               }
              ],
              "label": "WAY TO G04",
              "vfov": 180,
              "hfovMax": 138
             },
             "distance": 1
            },
            {
             "backwardYaw": -170.87,
             "class": "AdjacentPanorama",
             "yaw": 96.6,
             "panorama": "this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30",
             "distance": 1
            },
            {
             "backwardYaw": -92.63,
             "class": "AdjacentPanorama",
             "yaw": -16.1,
             "panorama": {
              "audios": [
               {
                "autoplay": true,
                "class": "PanoramaAudio",
                "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                "id": "audio_22F8A610_2FA9_5FFE_41C7_AD5D6DE38C5D"
               }
              ],
              "thumbnailUrl": "media/panorama_29B2571E_27EF_3967_41B9_C3461B159A21_t.jpg",
              "hfov": 360,
              "id": "panorama_29B2571E_27EF_3967_41B9_C3461B159A21",
              "pitch": 0,
              "hfovMin": 120,
              "adjacentPanoramas": [
               {
                "backwardYaw": -16.1,
                "class": "AdjacentPanorama",
                "yaw": -92.63,
                "panorama": "this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA",
                "distance": 1
               }
              ],
              "class": "Panorama",
              "partial": false,
              "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_29B2571E_27EF_3967_41B9_C3461B159A21_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3217,
                   "width": 6434,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_29B2571E_27EF_3967_41B9_C3461B159A21_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_29B2571E_27EF_3967_41B9_C3461B159A21.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "maps": [
                   {
                    "hfov": 14.6,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 126,
                       "width": 136,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_29B2571E_27EF_3967_41B9_C3461B159A21_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": -92.63,
                    "pitch": -16.66
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "id": "overlay_3893CD2D_2C9B_379B_41C4_BF654FDEFEC8",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA, this.camera_3ECAB610_305B_9336_4193_9FCC656F11B9); this.mainPlayList.set('selectedIndex', 18)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 14.6,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -92.63,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 252,
                       "width": 272,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_29B2571E_27EF_3967_41B9_C3461B159A21_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -16.66
                   }
                  ]
                 },
                 {
                  "inertia": false,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 850,
                     "width": 850,
                     "class": "ImageResourceLevel",
                     "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                    }
                   ]
                  },
                  "hfov": 49.2,
                  "id": "panorama_29B2571E_27EF_3967_41B9_C3461B159A21_tcap0",
                  "angle": 0
                 }
                ]
               }
              ],
              "label": "ITP_G04",
              "vfov": 180,
              "hfovMax": 120
             },
             "distance": 1
            },
            {
             "backwardYaw": 100.86,
             "class": "AdjacentPanorama",
             "yaw": 70.04,
             "panorama": {
              "audios": [
               {
                "autoplay": true,
                "class": "PanoramaAudio",
                "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
                "id": "audio_22E88B77_2FA9_B422_41C5_09FB0A1C2AFF"
               }
              ],
              "thumbnailUrl": "media/panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_t.jpg",
              "hfov": 360,
              "id": "panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19",
              "pitch": 0,
              "hfovMin": 120,
              "adjacentPanoramas": [
               {
                "backwardYaw": 70.04,
                "class": "AdjacentPanorama",
                "yaw": 100.86,
                "panorama": "this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA",
                "distance": 1
               }
              ],
              "class": "Panorama",
              "partial": false,
              "label": "ITP_G06",
              "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_t.jpg",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 3217,
                   "width": 6434,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_hq.jpeg"
                  },
                  {
                   "height": 1608,
                   "width": 3217,
                   "class": "ImageResourceLevel",
                   "url": "media/panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "maps": [
                   {
                    "hfov": 10.07,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 92,
                       "width": 92,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "class": "HotspotPanoramaOverlayMap",
                    "yaw": 100.86,
                    "pitch": -11.99
                   }
                  ],
                  "class": "HotspotPanoramaOverlay",
                  "useHandCursor": true,
                  "rollOverDisplay": false,
                  "id": "overlay_3F5E9142_2C97_0F89_41BA_2E51E243AA45",
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA, this.camera_3EB785F0_305B_90F5_41A9_92BD9FFE13AE); this.mainPlayList.set('selectedIndex', 18)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "enabledInCardboard": true,
                  "items": [
                   {
                    "hfov": 10.07,
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 100.86,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 184,
                       "width": 184,
                       "class": "ImageResourceLevel",
                       "url": "media/panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -11.99
                   }
                  ]
                 },
                 {
                  "inertia": false,
                  "class": "TripodCapPanoramaOverlay",
                  "rotate": false,
                  "image": {
                   "class": "ImageResource",
                   "levels": [
                    {
                     "height": 850,
                     "width": 850,
                     "class": "ImageResourceLevel",
                     "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                    }
                   ]
                  },
                  "hfov": 51.6,
                  "id": "panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_tcap0",
                  "angle": 0
                 }
                ]
               }
              ],
              "vfov": 180,
              "hfovMax": 120
             },
             "distance": 1
            }
           ],
           "class": "Panorama",
           "partial": false,
           "label": "WAY TO G07",
           "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_t.jpg",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 3217,
                "width": 6434,
                "class": "ImageResourceLevel",
                "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_hq.jpeg"
               },
               {
                "height": 1608,
                "width": 3217,
                "class": "ImageResourceLevel",
                "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "maps": [
                {
                 "hfov": 10.13,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 92,
                    "width": 92,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": -16.1,
                 "pitch": -10.28
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "rollOverDisplay": false,
               "id": "overlay_3E425113_2C9D_0F8F_41C1_23EEE084083C",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_29B2571E_27EF_3967_41B9_C3461B159A21, this.camera_3F73368E_305B_932D_41A4_813E89D52C06); this.mainPlayList.set('selectedIndex', 11)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 10.13,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -16.1,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 184,
                    "width": 184,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -10.28
                }
               ]
              },
              {
               "maps": [
                {
                 "offsetY": 91.98,
                 "width": 183.96,
                 "class": "FlatHotspotPanoramaOverlayMap",
                 "yaw": 8.55,
                 "height": 183.96,
                 "offsetX": 91.98,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_1_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -19.41
                }
               ],
               "class": "FlatHotspotPanoramaOverlay",
               "useHandCursor": true,
               "rollOverDisplay": false,
               "id": "overlay_3D5727AF_2C9D_F297_41C5_9BED189AD52A",
               "areas": [
                {
                 "class": "FlatHotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF, this.camera_3F48166F_305B_93EB_41C4_1EFFCE49882D); this.mainPlayList.set('selectedIndex', 19)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "FlatHotspotPanoramaOverlayImage",
                 "offsetX": 91.98,
                 "yaw": 8.55,
                 "offsetY": 91.98,
                 "width": 141.62,
                 "height": 141.62,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 183,
                    "width": 183,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_1_0.gif"
                   }
                  ]
                 },
                 "pitch": -19.41
                }
               ]
              },
              {
               "maps": [
                {
                 "hfov": 9.98,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 92,
                    "width": 92,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "class": "HotspotPanoramaOverlayMap",
                 "yaw": 70.04,
                 "pitch": -14.12
                }
               ],
               "class": "HotspotPanoramaOverlay",
               "useHandCursor": true,
               "rollOverDisplay": false,
               "id": "overlay_3E394E37_2C9D_35F7_41C5_7A948499B145",
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19, this.camera_3F87B696_305B_933D_4192_C0C28A36ACCF); this.mainPlayList.set('selectedIndex', 12)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "hfov": 9.98,
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 70.04,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 184,
                    "width": 184,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -14.12
                }
               ]
              },
              {
               "maps": [
                {
                 "offsetY": 70.81,
                 "width": 141.62,
                 "class": "FlatHotspotPanoramaOverlayMap",
                 "yaw": -175.26,
                 "height": 141.62,
                 "offsetX": 70.81,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_3_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -19.89
                }
               ],
               "class": "FlatHotspotPanoramaOverlay",
               "useHandCursor": true,
               "rollOverDisplay": false,
               "id": "overlay_3F39E688_2C9D_129A_41C5_730C5BB433CD",
               "areas": [
                {
                 "class": "FlatHotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97, this.camera_3F5C367A_305B_93EA_41C2_8EE9BA76856F); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "FlatHotspotPanoramaOverlayImage",
                 "offsetX": 70.81,
                 "yaw": -175.26,
                 "offsetY": 70.81,
                 "width": 141.62,
                 "height": 141.62,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 141,
                    "width": 141,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_3_0.gif"
                   }
                  ]
                 },
                 "pitch": -19.89
                }
               ]
              },
              {
               "maps": [
                {
                 "offsetY": 91.98,
                 "width": 183.96,
                 "class": "FlatHotspotPanoramaOverlayMap",
                 "yaw": 96.6,
                 "height": 183.96,
                 "offsetX": 91.98,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "width": 16,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_4_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -14.19
                }
               ],
               "class": "FlatHotspotPanoramaOverlay",
               "useHandCursor": true,
               "rollOverDisplay": false,
               "id": "overlay_3FB599DF_2C9F_1EB7_41C1_BA5666B2D71E",
               "areas": [
                {
                 "class": "FlatHotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30, this.camera_3F613684_305B_931D_41B8_21053406BAC0); this.mainPlayList.set('selectedIndex', 6)",
                 "mapColor": "#FF0000"
                }
               ],
               "enabledInCardboard": true,
               "items": [
                {
                 "class": "FlatHotspotPanoramaOverlayImage",
                 "offsetX": 91.98,
                 "yaw": 96.6,
                 "offsetY": 91.98,
                 "width": 141.62,
                 "height": 141.62,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 183,
                    "width": 183,
                    "class": "ImageResourceLevel",
                    "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_4_0.gif"
                   }
                  ]
                 },
                 "pitch": -14.19
                }
               ]
              },
              {
               "inertia": false,
               "class": "TripodCapPanoramaOverlay",
               "rotate": false,
               "image": {
                "class": "ImageResource",
                "levels": [
                 {
                  "height": 850,
                  "width": 850,
                  "class": "ImageResourceLevel",
                  "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
                 }
                ]
               },
               "hfov": 48,
               "id": "panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_tcap0",
               "angle": 0
              }
             ]
            }
           ],
           "vfov": 180,
           "hfovMax": 120
          },
          "distance": 1
         }
        ],
        "class": "Panorama",
        "partial": false,
        "label": "Way to CC6",
        "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_t.jpg",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 3217,
             "width": 6434,
             "class": "ImageResourceLevel",
             "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_hq.jpeg"
            },
            {
             "height": 1608,
             "width": 3217,
             "class": "ImageResourceLevel",
             "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "inertia": false,
            "class": "TripodCapPanoramaOverlay",
            "rotate": false,
            "image": {
             "class": "ImageResource",
             "levels": [
              {
               "height": 850,
               "width": 850,
               "class": "ImageResourceLevel",
               "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
              }
             ]
            },
            "hfov": 66,
            "id": "panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_tcap0",
            "angle": 0
           },
           {
            "maps": [
             {
              "offsetY": 70.81,
              "width": 141.61,
              "class": "FlatHotspotPanoramaOverlayMap",
              "yaw": -89.12,
              "height": 141.61,
              "offsetX": 70.81,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_0_0_map.gif"
                }
               ]
              },
              "pitch": -23.94
             }
            ],
            "class": "FlatHotspotPanoramaOverlay",
            "useHandCursor": true,
            "rollOverDisplay": false,
            "id": "overlay_3E3027DE_2D69_B4E1_41B6_2B95B58A430E",
            "areas": [
             {
              "class": "FlatHotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA, this.camera_3EA1D5E3_305B_911A_41BB_D86A53249170); this.mainPlayList.set('selectedIndex', 18)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "FlatHotspotPanoramaOverlayImage",
              "offsetX": 70.81,
              "yaw": -89.12,
              "offsetY": 70.81,
              "width": 141.61,
              "height": 141.61,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 141,
                 "width": 141,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_0_0.gif"
                }
               ]
              },
              "pitch": -23.94
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 45.84,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "width": 78,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_1_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -74.76,
              "pitch": -28.85
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "rollOverDisplay": false,
            "id": "overlay_38073049_2D69_6BE3_419E_BEAA899FE1F9",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 45.84,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -74.76,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 190,
                 "width": 935,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -28.85
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 10.29,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 92,
                 "width": 92,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -27.69,
              "pitch": -0.81
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "rollOverDisplay": false,
            "id": "overlay_38E3BE93_2D58_D766_415B_E5A36F52734A",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 25)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 10.29,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -27.69,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 184,
                 "width": 184,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -0.81
             }
            ]
           },
           {
            "maps": [
             {
              "hfov": 10.16,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "width": 17,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_3_0_map.gif"
                }
               ]
              },
              "class": "HotspotPanoramaOverlayMap",
              "yaw": -27.22,
              "pitch": -8.78
             }
            ],
            "class": "HotspotPanoramaOverlay",
            "useHandCursor": true,
            "rollOverDisplay": false,
            "id": "overlay_3844ACD4_2D58_D4E1_41C0_13E40A0E3393",
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037, this.camera_203F35BC_305B_916E_41C3_25EAD095394D); this.mainPlayList.set('selectedIndex', 25)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "hfov": 10.16,
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -27.22,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 169,
                 "width": 183,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -8.78
             }
            ]
           },
           {
            "maps": [
             {
              "offsetY": 70.81,
              "width": 141.61,
              "class": "FlatHotspotPanoramaOverlayMap",
              "yaw": 90.02,
              "height": 141.61,
              "offsetX": 70.81,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_5_0_map.gif"
                }
               ]
              },
              "pitch": -19.2
             }
            ],
            "class": "FlatHotspotPanoramaOverlay",
            "useHandCursor": true,
            "rollOverDisplay": false,
            "id": "overlay_3A51B78D_2D59_B563_41B5_234B5FD781B1",
            "areas": [
             {
              "class": "FlatHotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC, this.camera_202CC5B6_305B_917D_41C2_94FAD395B224); this.mainPlayList.set('selectedIndex', 7)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "FlatHotspotPanoramaOverlayImage",
              "offsetX": 70.81,
              "yaw": 90.02,
              "offsetY": 70.81,
              "width": 141.61,
              "height": 141.61,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 141,
                 "width": 141,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_5_0.gif"
                }
               ]
              },
              "pitch": -19.2
             }
            ]
           },
           {
            "maps": [
             {
              "offsetY": 47.21,
              "width": 94.41,
              "class": "FlatHotspotPanoramaOverlayMap",
              "yaw": -0.17,
              "height": 94.41,
              "offsetX": 47.21,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "width": 16,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_6_0_map.gif"
                }
               ]
              },
              "pitch": -5.89
             }
            ],
            "class": "FlatHotspotPanoramaOverlay",
            "useHandCursor": true,
            "rollOverDisplay": false,
            "id": "overlay_3A67218D_2D59_ED63_41C2_2D643B5CEE23",
            "areas": [
             {
              "class": "FlatHotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F, this.camera_204025C3_305B_911B_41C5_39490F6D03F4); this.mainPlayList.set('selectedIndex', 21)",
              "mapColor": "#FF0000"
             }
            ],
            "enabledInCardboard": true,
            "items": [
             {
              "class": "FlatHotspotPanoramaOverlayImage",
              "offsetX": 47.21,
              "yaw": -0.17,
              "offsetY": 47.21,
              "width": 94.41,
              "height": 94.41,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 94,
                 "width": 94,
                 "class": "ImageResourceLevel",
                 "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_6_0.gif"
                }
               ]
              },
              "pitch": -5.89
             }
            ]
           }
          ]
         }
        ],
        "vfov": 180,
        "hfovMax": 120
       },
       "distance": 1
      },
      {
       "backwardYaw": -8.34,
       "class": "AdjacentPanorama",
       "yaw": 11.91,
       "panorama": "this.panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1",
       "distance": 1
      },
      {
       "backwardYaw": -87.41,
       "class": "AdjacentPanorama",
       "yaw": 94.82,
       "panorama": "this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF",
       "distance": 1
      }
     ],
     "class": "Panorama",
     "partial": false,
     "label": "1st Floor",
     "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_t.jpg",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3217,
          "width": 6434,
          "class": "ImageResourceLevel",
          "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_hq.jpeg"
         },
         {
          "height": 1608,
          "width": 3217,
          "class": "ImageResourceLevel",
          "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "maps": [
          {
           "offsetY": 70.81,
           "width": 141.61,
           "class": "FlatHotspotPanoramaOverlayMap",
           "yaw": -91.8,
           "height": 141.61,
           "offsetX": 70.81,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "width": 16,
              "class": "ImageResourceLevel",
              "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_0_0_map.gif"
             }
            ]
           },
           "pitch": -24.97
          }
         ],
         "class": "FlatHotspotPanoramaOverlay",
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_3D0D687B_2D7B_BBA6_41BC_ECF441DAA13C",
         "areas": [
          {
           "class": "FlatHotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 19)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "FlatHotspotPanoramaOverlayImage",
           "offsetX": 70.81,
           "yaw": -91.8,
           "offsetY": 70.81,
           "width": 141.61,
           "height": 141.61,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 141,
              "width": 141,
              "class": "ImageResourceLevel",
              "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_0_0.gif"
             }
            ]
           },
           "pitch": -24.97
          }
         ]
        },
        {
         "maps": [
          {
           "offsetY": 70.81,
           "width": 141.61,
           "class": "FlatHotspotPanoramaOverlayMap",
           "yaw": 88.92,
           "height": 141.61,
           "offsetX": 70.81,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "width": 16,
              "class": "ImageResourceLevel",
              "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_1_0_map.gif"
             }
            ]
           },
           "pitch": -20.51
          }
         ],
         "class": "FlatHotspotPanoramaOverlay",
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_3C33038B_2D7B_ED67_4162_240CB702B280",
         "areas": [
          {
           "class": "FlatHotspotPanoramaOverlayArea",
           "click": "this.mainPlayList.set('selectedIndex', 20)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "class": "FlatHotspotPanoramaOverlayImage",
           "offsetX": 70.81,
           "yaw": 88.92,
           "offsetY": 70.81,
           "width": 141.61,
           "height": 141.61,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 141,
              "width": 141,
              "class": "ImageResourceLevel",
              "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_1_0.gif"
             }
            ]
           },
           "pitch": -20.51
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 7.57,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 60,
              "width": 77,
              "class": "ImageResourceLevel",
              "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 11.91,
           "pitch": -29.75
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_3FF1BD8F_2D79_D57F_41C5_7720AA42F9E7",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1, this.camera_3F1DD656_305B_933A_41A2_B039E7B33D82); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 7.57,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 11.91,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 121,
              "width": 155,
              "class": "ImageResourceLevel",
              "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -29.75
          }
         ]
        },
        {
         "inertia": false,
         "class": "TripodCapPanoramaOverlay",
         "rotate": false,
         "image": {
          "class": "ImageResource",
          "levels": [
           {
            "height": 850,
            "width": 850,
            "class": "ImageResourceLevel",
            "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
           }
          ]
         },
         "hfov": 68.4,
         "id": "panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_tcap0",
         "angle": 0
        },
        {
         "maps": [
          {
           "hfov": 21.15,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "width": 48,
              "class": "ImageResourceLevel",
              "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_3_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": -90.69,
           "pitch": -28.46
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_3FB9CBC1_2D78_DCE2_41C6_3CEB3744347E",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF, this.camera_3F162650_305B_9336_41A3_49DBE55B10B8); this.mainPlayList.set('selectedIndex', 19)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 21.15,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -90.69,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 141,
              "width": 429,
              "class": "ImageResourceLevel",
              "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -28.46
          }
         ]
        },
        {
         "maps": [
          {
           "hfov": 27.37,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "width": 16,
              "class": "ImageResourceLevel",
              "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_4_0_map.gif"
             }
            ]
           },
           "class": "HotspotPanoramaOverlayMap",
           "yaw": 94.82,
           "pitch": -37.12
          }
         ],
         "class": "HotspotPanoramaOverlay",
         "useHandCursor": true,
         "rollOverDisplay": false,
         "id": "overlay_3FC32ECD_2D67_54E2_4187_163AC5537F46",
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF, this.camera_3F21A65C_305B_932D_41C4_7627A28E81DB); this.mainPlayList.set('selectedIndex', 20)",
           "mapColor": "#FF0000"
          }
         ],
         "enabledInCardboard": true,
         "items": [
          {
           "hfov": 27.37,
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 94.82,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 613,
              "width": 613,
              "class": "ImageResourceLevel",
              "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_4_0.png"
             }
            ]
           },
           "pitch": -37.12
          }
         ]
        }
       ]
      }
     ],
     "vfov": 180,
     "hfovMax": 120
    },
    "distance": 1
   }
  ],
  "class": "Panorama",
  "partial": false,
  "label": "IT Park Entrance",
  "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "class": "ImageResourceLevel",
       "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "maps": [
       {
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayMap",
        "yaw": -33.32,
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_10_0_map.gif"
          }
         ]
        },
        "pitch": -13.03
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_22680BFE_2C60_64A8_41BD_AE197438ED07",
      "areas": [
       {
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "offsetX": 70.81,
        "yaw": -33.32,
        "offsetY": 70.81,
        "width": 141.61,
        "height": 141.61,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 141,
           "width": 141,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_10_0.gif"
          }
         ]
        },
        "pitch": -13.03
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 17.8,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 38,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_11_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -31.64,
        "pitch": -18.2
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_22E47CB2_2C60_7CB9_41BC_2A97150099CA",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 17.8,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -31.64,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 140,
           "width": 334,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_11_0.png"
          }
         ]
        },
        "pitch": -18.2
       }
      ]
     },
     {
      "maps": [
       {
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayMap",
        "yaw": 31.4,
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_13_0_map.gif"
          }
         ]
        },
        "pitch": -10.69
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_23C8AFDE_2C60_9CE8_41BB_9E4F1F5BF323",
      "areas": [
       {
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "offsetX": 70.81,
        "yaw": 31.4,
        "offsetY": 70.81,
        "width": 141.61,
        "height": 141.61,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 141,
           "width": 141,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_13_0.gif"
          }
         ]
        },
        "pitch": -10.69
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 32.66,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 48,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_14_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 40.67,
        "pitch": -17.9
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_23BBCA29_2C20_A7AB_41B5_3FC55AFB6074",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 32.66,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 40.67,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 204,
           "width": 613,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_14_0.png"
          }
         ]
        },
        "pitch": -17.9
       }
      ]
     },
     {
      "maps": [
       {
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayMap",
        "yaw": -8.34,
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 16,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_15_0_map.gif"
          }
         ]
        },
        "pitch": -16.12
       }
      ],
      "class": "FlatHotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_3C11F6F3_2CD0_6C41_41BE_F31B22E52310",
      "areas": [
       {
        "class": "FlatHotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC, this.camera_201B95AC_305B_916D_41AC_139F8BE8962A); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "class": "FlatHotspotPanoramaOverlayImage",
        "offsetX": 70.81,
        "yaw": -8.34,
        "offsetY": 70.81,
        "width": 141.61,
        "height": 141.61,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 141,
           "width": 141,
           "class": "ImageResourceLevel",
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_15_0.gif"
          }
         ]
        },
        "pitch": -16.12
       }
      ]
     },
     {
      "inertia": false,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "width": 850,
         "class": "ImageResourceLevel",
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
        }
       ]
      },
      "hfov": 78,
      "id": "panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0",
      "angle": 0
     }
    ]
   }
  ],
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "gyroscopeVerticalDraggingEnabled": true,
  "viewerArea": "this.MainViewer",
  "class": "PanoramaPlayer",
  "gyroscopeEnabled": true,
  "touchControlMode": "drag_rotation",
  "buttonMoveDown": {
   "backgroundOpacity": 0,
   "pressedIconURL": "skin/IconButton_2B4FC4A0_27EA_DF5A_41C0_9FCD66B567CB_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "width": 30,
   "height": 30,
   "mode": "push",
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "iconURL": "skin/IconButton_2B4FC4A0_27EA_DF5A_41C0_9FCD66B567CB.png",
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_2B4FC4A0_27EA_DF5A_41C0_9FCD66B567CB_rollover.png",
   "cursor": "hand",
   "paddingLeft": 0,
   "id": "IconButton_2B4FC4A0_27EA_DF5A_41C0_9FCD66B567CB",
   "paddingTop": 0,
   "minHeight": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "paddingBottom": 0,
   "paddingRight": 0
  },
  "buttonPlay": {
   "backgroundOpacity": 0,
   "pressedIconURL": "skin/IconButton_2B4C449B_27EA_DF6D_4155_BB387E9444CF_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "width": 38,
   "height": 38,
   "mode": "push",
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "iconURL": "skin/IconButton_2B4C449B_27EA_DF6D_4155_BB387E9444CF.png",
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_2B4C449B_27EA_DF6D_4155_BB387E9444CF_rollover.png",
   "cursor": "hand",
   "paddingLeft": 0,
   "id": "IconButton_2B4C449B_27EA_DF6D_4155_BB387E9444CF",
   "paddingTop": 0,
   "minHeight": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "paddingBottom": 0,
   "paddingRight": 0
  },
  "buttonRestart": {
   "backgroundOpacity": 0,
   "pressedIconURL": "skin/IconButton_2B4CA49B_27EA_DF6D_41B0_4FE13DE49EF8_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "width": 38,
   "height": 38,
   "mode": "push",
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "iconURL": "skin/IconButton_2B4CA49B_27EA_DF6D_41B0_4FE13DE49EF8.png",
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_2B4CA49B_27EA_DF6D_41B0_4FE13DE49EF8_rollover.png",
   "cursor": "hand",
   "paddingLeft": 0,
   "id": "IconButton_2B4CA49B_27EA_DF6D_41B0_4FE13DE49EF8",
   "paddingTop": 0,
   "minHeight": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "paddingBottom": 0,
   "paddingRight": 0
  },
  "buttonMoveRight": {
   "backgroundOpacity": 0,
   "pressedIconURL": "skin/IconButton_2B4FF4A0_27EA_DF5A_41C1_AFDAD89D0E95_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "width": 30,
   "height": 30,
   "mode": "push",
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "iconURL": "skin/IconButton_2B4FF4A0_27EA_DF5A_41C1_AFDAD89D0E95.png",
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_2B4FF4A0_27EA_DF5A_41C1_AFDAD89D0E95_rollover.png",
   "cursor": "hand",
   "paddingLeft": 0,
   "id": "IconButton_2B4FF4A0_27EA_DF5A_41C1_AFDAD89D0E95",
   "paddingTop": 0,
   "minHeight": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "paddingBottom": 0,
   "paddingRight": 0
  },
  "buttonZoomIn": {
   "backgroundOpacity": 0,
   "pressedIconURL": "skin/IconButton_2B4FA4A0_27EA_DF5A_41C1_050EDD470B08_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "width": 30,
   "height": 30,
   "mode": "push",
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "iconURL": "skin/IconButton_2B4FA4A0_27EA_DF5A_41C1_050EDD470B08.png",
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_2B4FA4A0_27EA_DF5A_41C1_050EDD470B08_rollover.png",
   "cursor": "hand",
   "paddingLeft": 0,
   "id": "IconButton_2B4FA4A0_27EA_DF5A_41C1_050EDD470B08",
   "paddingTop": 0,
   "minHeight": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "paddingBottom": 0,
   "paddingRight": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonMoveLeft": {
   "backgroundOpacity": 0,
   "pressedIconURL": "skin/IconButton_2B4C34A0_27EA_DF5A_41C2_02F7276FA0B7_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "width": 30,
   "height": 30,
   "mode": "push",
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "iconURL": "skin/IconButton_2B4C34A0_27EA_DF5A_41C2_02F7276FA0B7.png",
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_2B4C34A0_27EA_DF5A_41C2_02F7276FA0B7_rollover.png",
   "cursor": "hand",
   "paddingLeft": 0,
   "id": "IconButton_2B4C34A0_27EA_DF5A_41C2_02F7276FA0B7",
   "paddingTop": 0,
   "minHeight": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "paddingBottom": 0,
   "paddingRight": 0
  },
  "buttonZoomOut": {
   "backgroundOpacity": 0,
   "pressedIconURL": "skin/IconButton_2B4F84A0_27EA_DF5A_41B4_ED21E3261B1F_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "width": 30,
   "height": 30,
   "mode": "push",
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "iconURL": "skin/IconButton_2B4F84A0_27EA_DF5A_41B4_ED21E3261B1F.png",
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_2B4F84A0_27EA_DF5A_41B4_ED21E3261B1F_rollover.png",
   "cursor": "hand",
   "paddingLeft": 0,
   "id": "IconButton_2B4F84A0_27EA_DF5A_41B4_ED21E3261B1F",
   "paddingTop": 0,
   "minHeight": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "paddingBottom": 0,
   "paddingRight": 0
  },
  "displayPlaybackBar": true,
  "buttonMoveUp": {
   "backgroundOpacity": 0,
   "pressedIconURL": "skin/IconButton_2B4FD4A0_27EA_DF5A_41C2_0BDD9329EACC_pressed.png",
   "horizontalAlign": "center",
   "verticalAlign": "middle",
   "width": 30,
   "height": 30,
   "mode": "push",
   "borderSize": 0,
   "class": "IconButton",
   "shadow": false,
   "iconURL": "skin/IconButton_2B4FD4A0_27EA_DF5A_41C2_0BDD9329EACC.png",
   "borderRadius": 0,
   "rollOverIconURL": "skin/IconButton_2B4FD4A0_27EA_DF5A_41C2_0BDD9329EACC_rollover.png",
   "cursor": "hand",
   "paddingLeft": 0,
   "id": "IconButton_2B4FD4A0_27EA_DF5A_41C2_0BDD9329EACC",
   "paddingTop": 0,
   "minHeight": 0,
   "minWidth": 0,
   "transparencyActive": false,
   "paddingBottom": 0,
   "paddingRight": 0
  },
  "preloadEnabled": false,
  "mouseControlMode": "drag_acceleration"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 4.44,
   "pitch": 2.47
  },
  "automaticRotationSpeed": 20,
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1655,
  "id": "panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_camera"
 },
 "this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97",
 {
  "initialPosition": {
   "hfov": 128,
   "class": "PanoramaCameraPosition",
   "yaw": -14.12,
   "pitch": 1.84
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_camera"
 },
 "this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_camera"
 },
 "this.panorama_37259611_27D1_394E_4185_29297B435B99",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_37259611_27D1_394E_4185_29297B435B99_camera"
 },
 "this.panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_camera"
 },
 "this.panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -97.19,
   "pitch": -5.22
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_camera"
 },
 "this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 114.49,
   "pitch": -4.39
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_camera"
 },
 "this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -1.92,
   "pitch": -1.65
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_camera"
 },
 "this.panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76",
 {
  "initialPosition": {
   "hfov": 131,
   "class": "PanoramaCameraPosition",
   "yaw": -0.74,
   "pitch": -18.86
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_camera"
 },
 "this.panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -15.17,
   "pitch": -24.85
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_camera"
 },
 "this.panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1",
 {
  "initialPosition": {
   "hfov": 126,
   "class": "PanoramaCameraPosition",
   "yaw": 10.78,
   "pitch": -4.3
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_camera"
 },
 "this.panorama_29B2571E_27EF_3967_41B9_C3461B159A21",
 {
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_29B2571E_27EF_3967_41B9_C3461B159A21_camera"
 },
 "this.panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 4.86,
   "pitch": -25.6
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_camera"
 },
 "this.panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9",
 {
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 2.47,
   "pitch": -14.55
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_camera"
 },
 "this.panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.98,
   "pitch": -7.41
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_camera"
 },
 "this.panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 3.29,
   "pitch": -26.08
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_camera"
 },
 "this.panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -178.08,
   "pitch": -34.04
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_camera"
 },
 "this.panorama_2985A949_27E9_49EA_41C1_E3247DC3654B",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 176.81,
   "pitch": -1.92
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_camera"
 },
 "this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 96.09,
   "pitch": -9.61
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_camera"
 },
 "this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_camera"
 },
 "this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_camera"
 },
 "this.panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_camera"
 },
 "this.panorama_3DC53593_2D68_D566_41A2_BD7032EE4536",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_camera"
 },
 {
  "audios": [
   {
    "autoplay": true,
    "class": "PanoramaAudio",
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_21F4E057_2FAB_5462_41C2_0652BEE11A0F.ogg",
     "mp3Url": "media/audio_21F4E057_2FAB_5462_41C2_0652BEE11A0F.mp3"
    },
    "id": "audio_21F4E057_2FAB_5462_41C2_0652BEE11A0F"
   }
  ],
  "thumbnailUrl": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_t.jpg",
  "hfov": 360,
  "id": "panorama_3C74261A_2D78_B761_41C1_C81907AC7616",
  "pitch": 0,
  "hfovMin": 60,
  "class": "Panorama",
  "partial": false,
  "label": "CC1",
  "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "class": "ImageResourceLevel",
       "url": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "inertia": false,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "width": 850,
         "class": "ImageResourceLevel",
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
        }
       ]
      },
      "hfov": 60,
      "id": "panorama_3C74261A_2D78_B761_41C1_C81907AC7616_tcap0",
      "angle": 0
     },
     {
      "maps": [
       {
        "hfov": 6.39,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 54,
           "width": 57,
           "class": "ImageResourceLevel",
           "url": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -20.96,
        "pitch": -2.08
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_312CC8C6_2DD8_DCEE_41AD_F5361CF55493",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 24)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 6.39,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -20.96,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 108,
           "width": 114,
           "class": "ImageResourceLevel",
           "url": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -2.08
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.86,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 34,
           "class": "ImageResourceLevel",
           "url": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_0_HS_1_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": -19.56,
        "pitch": 3.05
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_338B3097_2DDF_AB6E_41C2_88590DF77C00",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 24)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 10.86,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -19.56,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 91,
           "width": 194,
           "class": "ImageResourceLevel",
           "url": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 3.05
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_3C74261A_2D78_B761_41C1_C81907AC7616_camera"
 },
 {
  "audios": [
   {
    "autoplay": true,
    "class": "PanoramaAudio",
    "audio": {
     "class": "AudioResource",
     "oggUrl": "media/audio_21010EAA_2FAB_4C22_41B0_1499A05AE406.ogg",
     "mp3Url": "media/audio_21010EAA_2FAB_4C22_41B0_1499A05AE406.mp3"
    },
    "id": "audio_21010EAA_2FAB_4C22_41B0_1499A05AE406"
   }
  ],
  "thumbnailUrl": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_t.jpg",
  "hfov": 360,
  "id": "panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3",
  "pitch": 0,
  "hfovMin": 60,
  "class": "Panorama",
  "partial": false,
  "label": "CC2",
  "cardboardMenu": "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "class": "ImageResourceLevel",
       "url": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_hq.jpeg"
      },
      {
       "height": 1608,
       "width": 3217,
       "class": "ImageResourceLevel",
       "url": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "inertia": false,
      "class": "TripodCapPanoramaOverlay",
      "rotate": false,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 850,
         "width": 850,
         "class": "ImageResourceLevel",
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png"
        }
       ]
      },
      "hfov": 64.8,
      "id": "panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_tcap0",
      "angle": 0
     },
     {
      "maps": [
       {
        "hfov": 7.35,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 62,
           "width": 65,
           "class": "ImageResourceLevel",
           "url": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 33.87,
        "pitch": -1.18
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_332F5130_2DD8_ADA1_41B0_134ED2280BBA",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 22)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 7.35,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 33.87,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 125,
           "width": 131,
           "class": "ImageResourceLevel",
           "url": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -1.18
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 21.75,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "width": 42,
           "class": "ImageResourceLevel",
           "url": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_0_HS_1_0_map.gif"
          }
         ]
        },
        "class": "HotspotPanoramaOverlayMap",
        "yaw": 38.33,
        "pitch": 2.87
       }
      ],
      "class": "HotspotPanoramaOverlay",
      "useHandCursor": true,
      "rollOverDisplay": false,
      "id": "overlay_301DF789_2DE7_7562_41AB_D89BDB009015",
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 22)",
        "mapColor": "#FF0000"
       }
      ],
      "enabledInCardboard": true,
      "items": [
       {
        "hfov": 21.75,
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 38.33,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 147,
           "width": 389,
           "class": "ImageResourceLevel",
           "url": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_0_HS_1_0.png"
          }
         ]
        },
        "pitch": 2.87
       }
      ]
     }
    ]
   }
  ],
  "vfov": 180,
  "hfovMax": 120
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_camera"
 },
 "this.panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_camera"
 },
 "this.panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0",
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 7.69,
   "pitch": 0.27
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_camera"
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1",
    "camera": "this.panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97",
    "camera": "this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4",
    "camera": "this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_37259611_27D1_394E_4185_29297B435B99",
    "camera": "this.panorama_37259611_27D1_394E_4185_29297B435B99_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1",
    "camera": "this.panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20",
    "camera": "this.panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30",
    "camera": "this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC",
    "camera": "this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "media": "this.panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76",
    "camera": "this.panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5",
    "camera": "this.panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "media": "this.panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1",
    "camera": "this.panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "media": "this.panorama_29B2571E_27EF_3967_41B9_C3461B159A21",
    "camera": "this.panorama_29B2571E_27EF_3967_41B9_C3461B159A21_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "media": "this.panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19",
    "camera": "this.panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "media": "this.panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9",
    "camera": "this.panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "media": "this.panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD",
    "camera": "this.panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "media": "this.panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242",
    "camera": "this.panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "media": "this.panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5",
    "camera": "this.panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "media": "this.panorama_2985A949_27E9_49EA_41C1_E3247DC3654B",
    "camera": "this.panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "media": "this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA",
    "camera": "this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "media": "this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF",
    "camera": "this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "media": "this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF",
    "camera": "this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "media": "this.panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F",
    "camera": "this.panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "media": "this.panorama_3DC53593_2D68_D566_41A2_BD7032EE4536",
    "camera": "this.panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "media": "this.panorama_3C74261A_2D78_B761_41C1_C81907AC7616",
    "camera": "this.panorama_3C74261A_2D78_B761_41C1_C81907AC7616_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
    "media": "this.panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3",
    "camera": "this.panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
    "media": "this.panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037",
    "camera": "this.panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 0)",
    "media": "this.panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0",
    "camera": "this.panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "media": "this.panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1",
    "camera": "this.panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "media": "this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97",
    "camera": "this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "media": "this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4",
    "camera": "this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "media": "this.panorama_37259611_27D1_394E_4185_29297B435B99",
    "camera": "this.panorama_37259611_27D1_394E_4185_29297B435B99_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "media": "this.panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1",
    "camera": "this.panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "media": "this.panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20",
    "camera": "this.panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "media": "this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30",
    "camera": "this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "media": "this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC",
    "camera": "this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
    "media": "this.panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76",
    "camera": "this.panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)",
    "media": "this.panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5",
    "camera": "this.panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)",
    "media": "this.panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1",
    "camera": "this.panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)",
    "media": "this.panorama_29B2571E_27EF_3967_41B9_C3461B159A21",
    "camera": "this.panorama_29B2571E_27EF_3967_41B9_C3461B159A21_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 13)",
    "media": "this.panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19",
    "camera": "this.panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 13, 14)",
    "media": "this.panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9",
    "camera": "this.panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 14, 15)",
    "media": "this.panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD",
    "camera": "this.panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 15, 16)",
    "media": "this.panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242",
    "camera": "this.panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 16, 17)",
    "media": "this.panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5",
    "camera": "this.panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 17, 18)",
    "media": "this.panorama_2985A949_27E9_49EA_41C1_E3247DC3654B",
    "camera": "this.panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 18, 19)",
    "media": "this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA",
    "camera": "this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 19, 20)",
    "media": "this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF",
    "camera": "this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 20, 21)",
    "media": "this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF",
    "camera": "this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 21, 22)",
    "media": "this.panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F",
    "camera": "this.panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 22, 23)",
    "media": "this.panorama_3DC53593_2D68_D566_41A2_BD7032EE4536",
    "camera": "this.panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 23, 24)",
    "media": "this.panorama_3C74261A_2D78_B761_41C1_C81907AC7616",
    "camera": "this.panorama_3C74261A_2D78_B761_41C1_C81907AC7616_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 24, 25)",
    "media": "this.panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3",
    "camera": "this.panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 25, 26)",
    "media": "this.panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037",
    "camera": "this.panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 26, 0)",
    "media": "this.panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0",
    "camera": "this.panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_camera",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.Menu_3F21E4BB_305B_976A_41C7_3F9111F47119",
 {
  "initialPosition": {
   "hfov": 128,
   "class": "PanoramaCameraPosition",
   "yaw": -13.24,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F38E4CC_305B_972E_41C6_F7A02A5571B8"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -7.17,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F4384D3_305B_973A_4197_72FD450183AA"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 109.2,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F4B34DA_305B_972A_41AC_387E3618A839"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 8,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F50A4E0_305B_9716_41A1_DC9C92DA77B0"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 88.2,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F58E4E7_305B_971A_41BC_88A0696963C9"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 85.87,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F6184ED_305B_90EE_41C3_6EFA9DC498C3"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -104.67,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F7574FE_305B_90EA_41C1_0197007F0C3F"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 85.59,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F7D3510_305B_9135_41A4_4E45BC8D609C"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -83.4,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F83551A_305B_912A_41C5_C5911483A06D"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 124.16,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F8BF52C_305B_916E_41C2_41E51369B03D"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -5.63,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F91853E_305B_916A_41BD_3024BAF8AA82"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -36.45,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3FA6F54A_305B_912A_4146_A2D8A879CBF2"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 175.03,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3FAC955B_305B_912A_41C7_AA7B5252F75C"
 },
 {
  "initialPosition": {
   "hfov": 131,
   "class": "PanoramaCameraPosition",
   "yaw": -92.11,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3FB3A569_305B_9117_41C5_AE4043BCB181"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -169.07,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3FB94571_305B_91F7_41C5_7D71D2A318E3"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -85.18,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3FCD2578_305B_91F6_41AB_82D75F03274E"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -8.77,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "id": "camera_3FDE357F_305B_91EA_41A4_9278B55420B2"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -10.43,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3FE3358A_305B_9115_41A7_FBA4E1AAF7F3"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 4.74,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3FF5C591_305B_9136_41A1_F37B1632E368"
 },
 {
  "initialPosition": {
   "hfov": 126,
   "class": "PanoramaCameraPosition",
   "yaw": -79.89,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_2006859A_305B_912A_41A4_7D9C62D01010"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -81.98,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_200905A3_305B_911A_41B1_09A94BA0E470"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -168.09,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_201B95AC_305B_916D_41AC_139F8BE8962A"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 89.31,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_202CC5B6_305B_917D_41C2_94FAD395B224"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -155.75,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_203F35BC_305B_916E_41C3_25EAD095394D"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -177.01,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_204025C3_305B_911B_41C5_39490F6D03F4"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -171.45,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3EA1D5E3_305B_911A_41BB_D86A53249170"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -48.39,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3EAA75E9_305B_9116_41BC_91871A328081"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -109.96,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3EB785F0_305B_90F5_41A9_92BD9FFE13AE"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -2.62,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3EB1B5F6_305B_90FA_41C6_FFE6C6885F6B"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 173.24,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3EBA45FC_305B_90EE_41C1_A7E7EC8C4A16"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -161.84,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3EC45603_305B_931B_41B8_E6A9BA9774A3"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -79.82,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3EC0A609_305B_9316_41B2_DD2C9D1705B2"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 163.9,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3ECAB610_305B_9336_4193_9FCC656F11B9"
 },
 {
  "initialPosition": {
   "hfov": 128,
   "class": "PanoramaCameraPosition",
   "yaw": 132.81,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3ED74616_305B_933A_41C6_D4F4114EBFA1"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -155.67,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3ED1B61D_305B_932E_41C5_777A85907899"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 96.61,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3ED8D623_305B_931A_41B2_07C22549BAB4"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 177.62,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3EE5A62A_305B_9315_41B4_00BD4805A821"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -87.92,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3EECF630_305B_9376_415D_5BCC647820F0"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 64.79,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3EF66636_305B_937A_4193_BCD650031B98"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -60.01,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3EF1E63D_305B_936F_4190_2A5FE98F827E"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 152.78,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3EFBB643_305B_931B_41B2_F29CCAECBC41"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 35.07,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F00D649_305B_9316_41B7_03E65D88D6FD"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -89.98,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F162650_305B_9336_41A3_49DBE55B10B8"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 171.66,
   "pitch": 0
  },
  "automaticRotationSpeed": 20,
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1655,
  "id": "camera_3F1DD656_305B_933A_41A2_B039E7B33D82"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 92.59,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F21A65C_305B_932D_41C4_7627A28E81DB"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 179.83,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F337662_305B_931A_419A_240FA10C7AFC"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -90.92,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F46A668_305B_9316_41B2_0FCFAEC8BF2F"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 90.88,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F48166F_305B_93EB_41C4_1EFFCE49882D"
 },
 {
  "initialPosition": {
   "hfov": 128,
   "class": "PanoramaCameraPosition",
   "yaw": 168.09,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F5C367A_305B_93EA_41C2_8EE9BA76856F"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 9.13,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F613684_305B_931D_41B8_21053406BAC0"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "class": "PanoramaCameraPosition",
   "yaw": 87.37,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F73368E_305B_932D_41A4_813E89D52C06"
 },
 {
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -79.14,
   "pitch": 0
  },
  "class": "PanoramaCamera",
  "initialSequence": {
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ]
  },
  "automaticZoomSpeed": 10,
  "id": "camera_3F87B696_305B_933D_4192_C0C28A36ACCF"
 },
 {
  "autoplay": true,
  "class": "PanoramaAudio",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_0DF14580_2DF9_D562_41C5_0B11F5B0D218.ogg",
   "mp3Url": "media/audio_0DF14580_2DF9_D562_41C5_0B11F5B0D218.mp3",
   "id": "audioresource_0C56442E_2DE9_6BA1_41AB_BEB63BA5C3BE"
  },
  "id": "audio_0DF14580_2DF9_D562_41C5_0B11F5B0D218"
 },
 {
  "autoplay": true,
  "class": "PanoramaAudio",
  "audio": {
   "class": "AudioResource",
   "oggUrl": "media/audio_0E99EC8E_2DE8_BB61_419D_B3AE80B19E23.ogg",
   "mp3Url": "media/audio_0E99EC8E_2DE8_BB61_419D_B3AE80B19E23.mp3"
  },
  "id": "audio_0E99EC8E_2DE8_BB61_419D_B3AE80B19E23"
 },
 {
  "autoplay": true,
  "class": "PanoramaAudio",
  "audio": "this.audioresource_0C56442E_2DE9_6BA1_41AB_BEB63BA5C3BE",
  "id": "audio_0C56742E_2DE9_6BA1_41AC_D236B2DA2A5F"
 },
 "this.audio_23B58540_2FA6_FC5E_41C0_E7599CEC1CDA",
 {
  "autoplay": true,
  "class": "PanoramaAudio",
  "audio": "this.audioresource_232E9D8F_2FA6_CCE1_41A8_5242ED5BA926",
  "id": "audio_232EAD8F_2FA6_CCE1_41C5_562AB0D59FF3"
 },
 "this.audio_23642C00_2FAE_F3DF_4188_AA3D7BBBB0C0",
 "this.audio_234BEDED_2FAF_4C21_41B4_C1152F13889C",
 "this.audio_2375020C_2FAF_B7E7_41AF_78F06B760C7E",
 "this.audio_236BC725_2FAF_DC21_41C5_F323241016DE",
 "this.audio_228C4166_2FAF_D423_4196_447FDFD6DB1F",
 "this.audio_2292B498_2FAF_7CEE_41C1_6C1D7227D2E2",
 "this.audio_22B51CA9_2FAE_CC2E_41B4_A5BBB73AEA0C",
 "this.audio_22BEA209_2FAE_F7EE_41C0_8DFA69162F07",
 {
  "autoplay": true,
  "class": "PanoramaAudio",
  "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
  "id": "audio_22DF0A47_2FAE_D462_418D_8D18B34F3EFF"
 },
 "this.audio_22C6E070_2FA9_743F_41AE_274FD9EF9ED2",
 "this.audio_22F8A610_2FA9_5FFE_41C7_AD5D6DE38C5D",
 "this.audio_22E88B77_2FA9_B422_41C5_09FB0A1C2AFF",
 "this.audio_22213E85_2FA9_CCE6_41C4_587305F5551F",
 "this.audio_2239C1C8_2FA9_D46F_41A6_D86A00774BFF",
 "this.audio_22569882_2FA9_B4E3_41C0_50A1959294D4",
 "this.audio_2275E3D7_2FA9_5462_41BC_590CC652C15C",
 "this.audio_2279311B_2FAA_D5E1_4184_109B0FB01661",
 "this.audio_219FF965_2FAA_D426_41C4_B795582BB8EC",
 "this.audio_21B1133D_2FAB_5421_41A7_A4DCEA8D7680",
 "this.audio_21CB6711_2FAB_7DE1_41AB_CAC4333A9908",
 "this.audio_21E9529F_2FAB_D4E2_419C_3841B5C98CEA",
 "this.audio_21F4E057_2FAB_5462_41C2_0652BEE11A0F",
 "this.audio_21010EAA_2FAB_4C22_41B0_1499A05AE406",
 "this.audio_2135AF43_2FAA_CC61_4191_AE63101DD7C9",
 "this.audio_21686B11_2FAA_B5FE_41C5_02A5CCF1907B",
 "this.audio_2309F02C_2FB7_8F6E_41A7_0EB34FB20754",
 "this.audio_22AE9859_2FA9_9F37_41C0_899DAEFB5DCF"
], "children": [
 {
  "progressBorderColor": "#AAAAAA",
  "paddingRight": 0,
  "toolTipBorderSize": 1,
  "toolTipFontColor": "#606060",
  "toolTipFontWeight": "normal",
  "progressLeft": 10,
  "borderSize": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressOpacity": 1,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "class": "ViewerArea",
  "toolTipPaddingTop": 4,
  "playbackBarOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarOpacity": 1,
  "toolTipOpacity": 1,
  "playbackBarHeight": 20,
  "borderRadius": 0,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "paddingLeft": 0,
  "progressHeight": 20,
  "playbackBarBorderSize": 2,
  "progressBottom": 1,
  "minHeight": 50,
  "playbackBarHeadWidth": 6,
  "toolTipShadowColor": "#333333",
  "playbackBarBackgroundOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "toolTipShadowSpread": 0,
  "minWidth": 100,
  "toolTipShadowHorizontalLength": 0,
  "progressBorderSize": 2,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipBackgroundColor": "#F6F6F6",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "playbackBarRight": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "toolTipFontSize": 12,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBarBorderRadius": 4,
  "playbackBarHeadShadowColor": "#000000",
  "progressBarBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "progressBorderRadius": 4,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "transitionMode": "blending",
  "toolTipShadowBlurRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "shadow": false,
  "toolTipTextShadowBlurRadius": 3,
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingRight": 6,
  "playbackBarHeadHeight": 30,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarBorderRadius": 4,
  "top": 78,
  "playbackBarHeadBorderSize": 0,
  "playbackBarProgressBorderColor": "#000000",
  "bottom": 91,
  "toolTipFontStyle": "normal",
  "id": "MainViewer",
  "paddingTop": 0,
  "toolTipPaddingLeft": 6,
  "toolTipShadowOpacity": 1,
  "progressBarBackgroundColorDirection": "vertical",
  "progressOpacity": 1,
  "progressRight": 10,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBorderColor": "#000000",
  "left": 0,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadOpacity": 1,
  "right": 0,
  "progressBackgroundOpacity": 1,
  "toolTipPaddingBottom": 4,
  "paddingBottom": 0,
  "playbackBarBottom": 10
 },
 {
  "itemBackgroundColorRatios": [],
  "layout": "vertical",
  "backgroundOpacity": 0.2,
  "right": 7,
  "itemLabelFontSize": 14,
  "horizontalAlign": "left",
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "width": 304.4,
  "verticalAlign": "top",
  "itemThumbnailShadowOpacity": 0.8,
  "borderSize": 0,
  "backgroundColor": [
   "#000000"
  ],
  "itemPaddingLeft": 3,
  "itemThumbnailShadowColor": "#000000",
  "itemLabelFontColor": "#FFFFFF",
  "class": "ThumbnailList",
  "shadow": false,
  "maxWidth": 800,
  "scrollBarColor": "#FFFFFF",
  "itemBackgroundOpacity": 0,
  "minWidth": 0,
  "maxHeight": 800,
  "itemThumbnailShadowSpread": 1,
  "itemThumbnailShadowHorizontalLength": 3,
  "scrollBarMargin": 2,
  "itemLabelTextDecoration": "none",
  "gap": 10,
  "itemThumbnailOpacity": 1,
  "scrollBarOpacity": 0.5,
  "borderRadius": 5,
  "scrollBarVisible": "rollOver",
  "top": 83,
  "itemLabelHorizontalAlign": "center",
  "itemThumbnailHeight": 75,
  "itemThumbnailWidth": 100,
  "itemThumbnailScaleMode": "fit_outside",
  "itemPaddingTop": 3,
  "backgroundColorRatios": [
   0
  ],
  "itemOpacity": 1,
  "itemThumbnailShadowVerticalLength": 3,
  "bottom": 100,
  "paddingLeft": 20,
  "paddingTop": 10,
  "itemLabelPosition": "bottom",
  "itemLabelFontFamily": "Arial",
  "id": "thumbnaillist5245",
  "minHeight": 0,
  "itemThumbnailShadowBlurRadius": 4,
  "itemMode": "normal",
  "itemLabelFontStyle": "normal",
  "itemBackgroundColorDirection": "vertical",
  "playList": "this.thumbnaillist5245_playlist",
  "itemLabelFontWeight": "normal",
  "itemThumbnailBorderRadius": 5,
  "itemThumbnailShadow": true,
  "itemPaddingRight": 3,
  "itemHorizontalAlign": "center",
  "itemBorderRadius": 0,
  "itemLabelGap": 5,
  "itemPaddingBottom": 3,
  "paddingBottom": 10,
  "paddingRight": 20,
  "itemBackgroundColor": [],
  "itemVerticalAlign": "middle",
  "selectedItemLabelFontWeight": "bold"
 },
 {
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "verticalAlign": "middle",
  "width": "4.867%",
  "borderSize": 0,
  "height": "8.844%",
  "class": "Image",
  "shadow": false,
  "maxWidth": 850,
  "maxHeight": 850,
  "scaleMode": "fit_inside",
  "url": "skin/Image_357E6A96_27F1_6975_41C3_30EE1FA7B27A.png",
  "borderRadius": 0,
  "top": "0.3%",
  "paddingLeft": 0,
  "id": "Image_357E6A96_27F1_6975_41C3_30EE1FA7B27A",
  "paddingTop": 0,
  "minHeight": 1,
  "minWidth": 1,
  "left": "0.42%",
  "paddingBottom": 0,
  "paddingRight": 0
 },
 {
  "backgroundOpacity": 0,
  "horizontalAlign": "center",
  "fontColor": "#000000",
  "fontSize": 25,
  "width": "33.564%",
  "verticalAlign": "middle",
  "borderSize": 0,
  "height": "8.871%",
  "textDecoration": "none",
  "class": "Label",
  "shadow": false,
  "fontFamily": "Impact",
  "text": "Kongu Engineering College",
  "fontStyle": "normal",
  "borderRadius": 0,
  "top": "0.57%",
  "fontWeight": "normal",
  "paddingLeft": 0,
  "id": "Label_3415EB0B_27CF_2F53_41C1_F7526698AB0F",
  "paddingTop": 0,
  "minHeight": 1,
  "minWidth": 1,
  "left": "0.05%",
  "paddingBottom": 0,
  "paddingRight": 0
 },
 {
  "layout": "horizontal",
  "backgroundOpacity": 1,
  "horizontalAlign": "center",
  "backgroundColorDirection": "vertical",
  "scrollBarWidth": 10,
  "width": 1002.4,
  "height": 86,
  "borderSize": 0,
  "backgroundColor": [
   "#FFFFFF"
  ],
  "verticalAlign": "middle",
  "class": "Container",
  "shadow": false,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "scrollBarMargin": 2,
  "children": [
   "this.IconButton_2B4CA49B_27EA_DF6D_41B0_4FE13DE49EF8",
   {
    "backgroundOpacity": 0,
    "pressedIconURL": "skin/IconButton_2B4C549B_27EA_DF6D_419A_7D5975CC807E_pressed.png",
    "horizontalAlign": "center",
    "verticalAlign": "middle",
    "width": 38,
    "height": 38,
    "mode": "push",
    "borderSize": 0,
    "class": "IconButton",
    "shadow": false,
    "iconURL": "skin/IconButton_2B4C549B_27EA_DF6D_419A_7D5975CC807E.png",
    "borderRadius": 0,
    "rollOverIconURL": "skin/IconButton_2B4C549B_27EA_DF6D_419A_7D5975CC807E_rollover.png",
    "cursor": "hand",
    "paddingLeft": 0,
    "id": "IconButton_2B4C549B_27EA_DF6D_419A_7D5975CC807E",
    "paddingTop": 0,
    "minHeight": 0,
    "minWidth": 0,
    "transparencyActive": false,
    "paddingBottom": 0,
    "paddingRight": 0
   },
   "this.IconButton_2B4C449B_27EA_DF6D_4155_BB387E9444CF",
   {
    "backgroundOpacity": 0,
    "pressedIconURL": "skin/IconButton_2B4C74A0_27EA_DF5A_41A9_60433603CBF0_pressed.png",
    "horizontalAlign": "center",
    "verticalAlign": "middle",
    "width": 38,
    "height": 38,
    "mode": "push",
    "borderSize": 0,
    "class": "IconButton",
    "shadow": false,
    "iconURL": "skin/IconButton_2B4C74A0_27EA_DF5A_41A9_60433603CBF0.png",
    "borderRadius": 0,
    "rollOverIconURL": "skin/IconButton_2B4C74A0_27EA_DF5A_41A9_60433603CBF0_rollover.png",
    "cursor": "hand",
    "paddingLeft": 0,
    "id": "IconButton_2B4C74A0_27EA_DF5A_41A9_60433603CBF0",
    "paddingTop": 0,
    "minHeight": 0,
    "minWidth": 0,
    "transparencyActive": false,
    "paddingBottom": 0,
    "paddingRight": 0
   },
   {
    "backgroundOpacity": 0,
    "pressedIconURL": "skin/IconButton_2B4C64A0_27EA_DF5A_41A4_09DF0F36BB0C_pressed.png",
    "horizontalAlign": "center",
    "verticalAlign": "middle",
    "width": 38,
    "height": 38,
    "mode": "toggle",
    "borderSize": 0,
    "class": "IconButton",
    "shadow": false,
    "iconURL": "skin/IconButton_2B4C64A0_27EA_DF5A_41A4_09DF0F36BB0C.png",
    "borderRadius": 0,
    "cursor": "hand",
    "paddingLeft": 0,
    "id": "IconButton_2B4C64A0_27EA_DF5A_41A4_09DF0F36BB0C",
    "paddingTop": 0,
    "minHeight": 0,
    "minWidth": 0,
    "transparencyActive": false,
    "paddingBottom": 0,
    "paddingRight": 0
   },
   {
    "layout": "horizontal",
    "backgroundOpacity": 1,
    "horizontalAlign": "center",
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "width": 133,
    "children": [
     "this.IconButton_2B4C34A0_27EA_DF5A_41C2_02F7276FA0B7",
     {
      "layout": "vertical",
      "backgroundOpacity": 1,
      "horizontalAlign": "center",
      "backgroundColorDirection": "vertical",
      "scrollBarWidth": 10,
      "width": 47,
      "children": [
       "this.IconButton_2B4FD4A0_27EA_DF5A_41C2_0BDD9329EACC",
       "this.IconButton_2B4FC4A0_27EA_DF5A_41C0_9FCD66B567CB"
      ],
      "borderSize": 0,
      "backgroundColor": [
       "#FFFFFF"
      ],
      "verticalAlign": "middle",
      "height": "100%",
      "class": "Container",
      "shadow": false,
      "scrollBarColor": "#000000",
      "contentOpaque": false,
      "scrollBarMargin": 2,
      "gap": 10,
      "borderRadius": 0,
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "paddingLeft": 0,
      "backgroundColorRatios": [
       0
      ],
      "id": "Container_2B4C24A0_27EA_DF5A_41AB_98F1201C5C00",
      "overflow": "hidden",
      "paddingTop": 0,
      "minHeight": 20,
      "minWidth": 20,
      "paddingBottom": 0,
      "paddingRight": 0
     },
     "this.IconButton_2B4FF4A0_27EA_DF5A_41C1_AFDAD89D0E95"
    ],
    "borderSize": 0,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "verticalAlign": "middle",
    "height": "100%",
    "class": "Container",
    "shadow": false,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "scrollBarMargin": 2,
    "gap": 5,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "paddingLeft": 0,
    "backgroundColorRatios": [
     0
    ],
    "id": "Container_2B4C04A0_27EA_DF5A_419B_0FED4AF2D571",
    "overflow": "hidden",
    "paddingTop": 0,
    "minHeight": 20,
    "minWidth": 20,
    "paddingBottom": 0,
    "paddingRight": 0
   },
   {
    "layout": "horizontal",
    "backgroundOpacity": 1,
    "horizontalAlign": "center",
    "backgroundColorDirection": "vertical",
    "scrollBarWidth": 10,
    "width": 85,
    "children": [
     "this.IconButton_2B4F84A0_27EA_DF5A_41B4_ED21E3261B1F",
     "this.IconButton_2B4FA4A0_27EA_DF5A_41C1_050EDD470B08"
    ],
    "borderSize": 0,
    "backgroundColor": [
     "#FFFFFF"
    ],
    "verticalAlign": "middle",
    "height": "100%",
    "class": "Container",
    "shadow": false,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "scrollBarMargin": 2,
    "gap": 10,
    "borderRadius": 0,
    "scrollBarVisible": "rollOver",
    "scrollBarOpacity": 0.5,
    "paddingLeft": 0,
    "backgroundColorRatios": [
     0
    ],
    "id": "Container_2B4F94A0_27EA_DF5A_41C1_D0F5EA6420BE",
    "overflow": "hidden",
    "paddingTop": 0,
    "minHeight": 20,
    "minWidth": 20,
    "paddingBottom": 0,
    "paddingRight": 0
   }
  ],
  "gap": 10,
  "borderRadius": 0,
  "scrollBarVisible": "rollOver",
  "scrollBarOpacity": 0.5,
  "paddingLeft": 0,
  "backgroundColorRatios": [
   0
  ],
  "bottom": "0%",
  "id": "Container_2B4F54A1_27EA_DF5A_41B6_93AAD349EA22",
  "overflow": "hidden",
  "paddingTop": 0,
  "minHeight": 20,
  "minWidth": 20,
  "right": "9.97%",
  "paddingBottom": 0,
  "paddingRight": 0
 }
], 
 "layout": "absolute",
 "horizontalAlign": "left",
 "scrollBarWidth": 10,
 "buttonToggleMute": "this.IconButton_2B4C64A0_27EA_DF5A_41A4_09DF0F36BB0C",
 "verticalAlign": "top",
 "borderSize": 0,
 "width": "100%",
 "height": "100%",
 "class": "Player",
 "shadow": false,
 "contentOpaque": false,
 "scrollBarColor": "#000000",
 "scrollBarMargin": 2,
 "gap": 10,
 "backgroundPreloadEnabled": true,
 "borderRadius": 0,
 "scrollBarVisible": "rollOver",
 "mouseWheelEnabled": true,
 "scrollBarOpacity": 0.5,
 "paddingLeft": 0,
 "id": "rootPlayer",
 "overflow": "visible",
 "paddingTop": 0,
 "minHeight": 20,
 "scripts": {
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "existsKey": function(key){  return key in window; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getKey": function(key){  return window[key]; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); }
 },
 "minWidth": 20,
 "vrPolyfillScale": 0.5,
 "start": "this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "paddingBottom": 0,
 "paddingRight": 0
})