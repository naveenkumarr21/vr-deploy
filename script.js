TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "hfovMin": 90,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_2A8EE7CD_3779_CE2B_41C2_FD41A8D95E6D",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_2A8EE7CD_3779_CE2B_41C2_FD41A8D95E6D.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_2A8EE7CD_3779_CE2B_41C2_FD41A8D95E6D.ogg"
    },
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_t.jpg",
  "cardboardMenu": {
   "rollOverBackgroundColor": "#000000",
   "fontFamily": "Arial",
   "rollOverFontColor": "#FFFFFF",
   "label": "Media",
   "opacity": 0.4,
   "rollOverOpacity": 0.8,
   "fontColor": "#FFFFFF",
   "backgroundColor": "#404040",
   "id": "Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
   "class": "Menu",
   "selectedBackgroundColor": "#202020",
   "children": [
    {
     "label": "IT Park Entrance",
     "click": "this.mainPlayList.set('selectedIndex', 0)",
     "class": "MenuItem"
    },
    {
     "label": "WAY TO G04",
     "click": "this.mainPlayList.set('selectedIndex', 1)",
     "class": "MenuItem"
    },
    {
     "label": "WAY TO INNOVATION HUB",
     "click": "this.mainPlayList.set('selectedIndex', 2)",
     "class": "MenuItem"
    },
    {
     "label": "WAY TO HOD OFFICE",
     "click": "this.mainPlayList.set('selectedIndex', 3)",
     "class": "MenuItem"
    },
    {
     "label": "WAY TO SEMINAR HALL",
     "click": "this.mainPlayList.set('selectedIndex', 4)",
     "class": "MenuItem"
    },
    {
     "label": "WAY TO SVG SIR CABIN,HOD OFFICE",
     "click": "this.mainPlayList.set('selectedIndex', 5)",
     "class": "MenuItem"
    },
    {
     "label": "WAT TO G10,STAFF ROOMS",
     "click": "this.mainPlayList.set('selectedIndex', 6)",
     "class": "MenuItem"
    },
    {
     "label": "1st Floor",
     "click": "this.mainPlayList.set('selectedIndex', 7)",
     "class": "MenuItem"
    },
    {
     "label": "ITP_G01",
     "click": "this.mainPlayList.set('selectedIndex', 8)",
     "class": "MenuItem"
    },
    {
     "label": "Innovation Hub",
     "click": "this.mainPlayList.set('selectedIndex', 9)",
     "class": "MenuItem"
    },
    {
     "label": "ITP_G03",
     "click": "this.mainPlayList.set('selectedIndex', 10)",
     "class": "MenuItem"
    },
    {
     "label": "ITP_G04",
     "click": "this.mainPlayList.set('selectedIndex', 11)",
     "class": "MenuItem"
    },
    {
     "label": "ITP_G06",
     "click": "this.mainPlayList.set('selectedIndex', 12)",
     "class": "MenuItem"
    },
    {
     "label": "ITP_G07",
     "click": "this.mainPlayList.set('selectedIndex', 13)",
     "class": "MenuItem"
    },
    {
     "label": "ITP_G09",
     "click": "this.mainPlayList.set('selectedIndex', 14)",
     "class": "MenuItem"
    },
    {
     "label": "ITP_G10",
     "click": "this.mainPlayList.set('selectedIndex', 15)",
     "class": "MenuItem"
    },
    {
     "label": "StageView of Seminar_hall",
     "click": "this.mainPlayList.set('selectedIndex', 16)",
     "class": "MenuItem"
    },
    {
     "label": "AudienceView of Seminar_hall",
     "click": "this.mainPlayList.set('selectedIndex', 17)",
     "class": "MenuItem"
    },
    {
     "label": "WAY TO G07",
     "click": "this.mainPlayList.set('selectedIndex', 18)",
     "class": "MenuItem"
    },
    {
     "label": "Way to CC6",
     "click": "this.mainPlayList.set('selectedIndex', 19)",
     "class": "MenuItem"
    },
    {
     "label": "Way to CC8",
     "click": "this.mainPlayList.set('selectedIndex', 20)",
     "class": "MenuItem"
    },
    {
     "label": "Way to CC5",
     "click": "this.mainPlayList.set('selectedIndex', 21)",
     "class": "MenuItem"
    },
    {
     "label": "Way to CC 1 & 2",
     "click": "this.mainPlayList.set('selectedIndex', 22)",
     "class": "MenuItem"
    },
    {
     "label": "CC1",
     "click": "this.mainPlayList.set('selectedIndex', 23)",
     "class": "MenuItem"
    },
    {
     "label": "CC2",
     "click": "this.mainPlayList.set('selectedIndex', 24)",
     "class": "MenuItem"
    },
    {
     "label": "CC6",
     "click": "this.mainPlayList.set('selectedIndex', 25)",
     "class": "MenuItem"
    },
    {
     "label": "CC8",
     "click": "this.mainPlayList.set('selectedIndex', 26)",
     "class": "MenuItem"
    },
    {
     "label": "Outside of IT PARK",
     "click": "this.mainPlayList.set('selectedIndex', 27)",
     "class": "MenuItem"
    }
   ],
   "selectedFontColor": "#FFFFFF"
  },
  "label": "IT Park Entrance",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "offsetY": 70.81,
        "width": 141.61,
        "yaw": -33.32,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_10_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.03
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_22680BFE_2C60_64A8_41BD_AE197438ED07",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -33.32,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_10_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.03
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 17.8,
        "yaw": -31.64,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 38,
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_11_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -18.2
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_22E47CB2_2C60_7CB9_41BC_2A97150099CA",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -31.64,
        "hfov": 17.8,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 140,
           "width": 334,
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_11_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": 31.4,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_13_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.69
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_23C8AFDE_2C60_9CE8_41BB_9E4F1F5BF323",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 31.4,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_13_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.69
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 32.66,
        "yaw": 40.67,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 48,
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_14_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.9
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_23BBCA29_2C20_A7AB_41B5_3FC55AFB6074",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 40.67,
        "hfov": 32.66,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 204,
           "width": 613,
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_14_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": -8.34,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_15_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.12
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3C11F6F3_2CD0_6C41_41BE_F31B22E52310",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 7)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -8.34,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_15_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.12
       }
      ]
     },
     {
      "inertia": false,
      "id": "panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0",
      "rotate": false,
      "hfov": 78,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 7.68,
        "yaw": 174.73,
        "image": {
         "levels": [
          {
           "height": 74,
           "width": 69,
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_16_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.05
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3B6412A4_3529_C619_41B2_1291BCEA1A8A",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 27)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 174.73,
        "hfov": 7.68,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 148,
           "width": 138,
           "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_0_HS_16_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -8.05
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "gyroscopeEnabled": true,
  "id": "MainViewerPanoramaPlayer",
  "displayPlaybackBar": true,
  "class": "PanoramaPlayer",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration"
 },
 {
  "automaticRotationSpeed": 20,
  "initialPosition": {
   "hfov": 120,
   "yaw": -4.65,
   "class": "PanoramaCameraPosition",
   "pitch": 1.8
  },
  "id": "panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1655
 },
 {
  "hfovMin": 99,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_23642C00_2FAE_F3DF_4188_AA3D7BBBB0C0",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_23642C00_2FAE_F3DF_4188_AA3D7BBBB0C0.mp3",
     "id": "audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
     "class": "AudioResource",
     "oggUrl": "media/audio_23642C00_2FAE_F3DF_4188_AA3D7BBBB0C0.ogg"
    },
    "autoplay": true
   }
  ],
  "hfovMax": 138,
  "id": "panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "WAY TO G04",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_tcap0",
      "rotate": false,
      "hfov": 48,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 11.43,
        "yaw": -47.19,
        "image": {
         "levels": [
          {
           "height": 145,
           "width": 104,
           "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.51
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2882CE14_27D1_2976_4195_EF6187E34CD8",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 10)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -47.19,
        "hfov": 11.43,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 291,
           "width": 208,
           "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.51
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 3.71,
        "yaw": -19.6,
        "image": {
         "levels": [
          {
           "height": 39,
           "width": 33,
           "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.26
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2322B831_2C75_1D8A_4191_F67EAECB479D",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -19.6,
        "hfov": 3.71,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 78,
           "width": 66,
           "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": -11.91,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -26.62
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_229FDC8A_2C77_1699_4177_AE36647836B1",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 18)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -11.91,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.62,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.62,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_2_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": 166.76,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.36
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3F41C94B_2D30_2441_419E_728867919E3D",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 166.76,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_4_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.36
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 29,
        "yaw": -34.22,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -32.31
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2E29D2DD_36E9_462B_4195_2A27107D81A5",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -34.22,
        "hfov": 29,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 613,
           "width": 613,
           "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -32.31
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 34.28,
        "yaw": -4.36,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 116,
           "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.69
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2F31F399_36E8_C62B_41B2_F05EBF30EAE0",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -4.36,
        "hfov": 34.28,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 84,
           "width": 613,
           "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.69
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "hfov": 128,
   "yaw": -14.12,
   "class": "PanoramaCameraPosition",
   "pitch": 1.84
  },
  "id": "panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_234BEDED_2FAF_4C21_41B4_C1152F13889C",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "WAY TO INNOVATION HUB",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 11.94,
        "yaw": 24.33,
        "image": {
         "levels": [
          {
           "height": 123,
           "width": 109,
           "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.13
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_37ECDA56_27D2_E9F2_41B3_63F3332DE3F0",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 24.33,
        "hfov": 11.94,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 247,
           "width": 218,
           "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": -4.97,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.14
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3CDC7AFC_2D30_2447_41C5_3B0E9144FE63",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -4.97,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_2_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": 169.57,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.31
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3E02AE8F_2D30_7CC1_41B6_F5EC9B1D8FB8",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 169.57,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_3_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.31
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 14.66,
        "yaw": -171.97,
        "image": {
         "levels": [
          {
           "height": 155,
           "width": 131,
           "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_4_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.35
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3E680043_2D30_2441_41C2_A6CBB11EF613",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 7)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -171.97,
        "hfov": 14.66,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 311,
           "width": 262,
           "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.35
       }
      ]
     },
     {
      "inertia": false,
      "id": "panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_tcap0",
      "rotate": false,
      "hfov": 48,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 46.23,
        "yaw": 40.08,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 101,
           "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.31
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2E80E9AC_36EF_4269_41CA_FB8B5C132070",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 9)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 40.08,
        "hfov": 46.23,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 139,
           "width": 886,
           "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.31
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 20.87,
        "yaw": -5.37,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 70,
           "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.23
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2FBD281B_36EF_422F_41C6_6453FAF8760C",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -5.37,
        "hfov": 20.87,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 91,
           "width": 402,
           "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.23
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_2375020C_2FAF_B7E7_41AF_78F06B760C7E",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_37259611_27D1_394E_4185_29297B435B99",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_37259611_27D1_394E_4185_29297B435B99_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "WAY TO HOD OFFICE",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_37259611_27D1_394E_4185_29297B435B99_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "offsetY": 70.81,
        "width": 141.61,
        "yaw": 18.16,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.37
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3E273727_2D50_2DC0_41B6_5F4E29232441",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 18.16,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_2_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": -70.8,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.5
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_39221C2F_2D50_E3C1_41C2_09BF2921E7EC",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -70.8,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_3_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": 109.51,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.59
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_39813A0E_2D50_27C3_41B8_BC81C27798E0",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 109.51,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_4_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.59
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 9.75,
        "yaw": 131.61,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_5_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -18.65
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_397F68FC_2D50_2447_41AB_B57122C1587A",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 8)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 131.61,
        "hfov": 9.75,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.65
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 58.84,
        "yaw": 119.99,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 104,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -32.59
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3835FF95_2D50_1CC1_4184_92ECCA0D3F5B",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 119.99,
        "hfov": 58.84,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 191,
           "width": 1248,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -32.59
       }
      ]
     },
     {
      "inertia": false,
      "id": "panorama_37259611_27D1_394E_4185_29297B435B99_tcap0",
      "rotate": false,
      "hfov": 48,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 59.04,
        "yaw": 60.75,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 27,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.33
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2FC20B61_3718_C61B_41CA_C7BF093741CA",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 60.75,
        "hfov": 59.04,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 613,
           "width": 1063,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.33
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 30.86,
        "yaw": 145.34,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_8_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -25.93
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2C0589C0_3719_4219_4180_0CDE084928D0",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 145.34,
        "hfov": 30.86,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 613,
           "width": 613,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.93
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.79,
        "yaw": 174.71,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 91,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_9_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.94
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2D0F230F_3719_4627_41BF_CA9BCD559FD0",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "roll": 0,
        "yaw": 174.71,
        "hfov": 10.79,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 418,
           "width": 193,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.94
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 15.96,
        "yaw": -172.24,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 128,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_10_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.63
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2F03E3C7_3718_C627_41B7_44CC51539993",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "roll": 0,
        "yaw": -172.24,
        "hfov": 15.96,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 445,
           "width": 287,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_10_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.63
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 25.86,
        "yaw": -149.06,
        "image": {
         "levels": [
          {
           "height": 183,
           "width": 200,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_11_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.47
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2F899BF9_3727_45EB_41AD_9860BB4DA161",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "roll": 0,
        "yaw": -149.06,
        "hfov": 25.86,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 433,
           "width": 470,
           "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_0_HS_11_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.47
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_37259611_27D1_394E_4185_29297B435B99.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_37259611_27D1_394E_4185_29297B435B99_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_236BC725_2FAF_DC21_41C5_F323241016DE",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "WAY TO SEMINAR HALL",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_tcap0",
      "rotate": false,
      "hfov": 48,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 15.66,
        "yaw": -6.76,
        "image": {
         "levels": [
          {
           "height": 123,
           "width": 141,
           "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.19
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3FD9520E_2FB9_57E3_4187_90889FBDA9FF",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 16)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -6.76,
        "hfov": 15.66,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 247,
           "width": 282,
           "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": 141.53,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 104.2,
        "offsetX": 52.1,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.28
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3FEB4F5A_2FB9_4C62_41BE_943C31B33279",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 141.53,
        "offsetX": 52.1,
        "offsetY": 52.1,
        "width": 104.2,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 104.2,
        "image": {
         "levels": [
          {
           "height": 104,
           "width": 104,
           "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_0_HS_1_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -25.28
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 16.77,
        "yaw": 143.55,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 30,
           "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -29.21
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3F4D8E63_2FA6_CC22_41B8_2F96721D1A00",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 143.55,
        "hfov": 16.77,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 181,
           "width": 343,
           "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -29.21
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_228C4166_2FAF_D423_4196_447FDFD6DB1F",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "WAY TO SVG SIR CABIN,HOD OFFICE",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "offsetY": 70.81,
        "width": 141.61,
        "yaw": -94.13,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.57
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3B84FE02_2D70_1FC0_41C3_7765D4DCB6A6",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 6)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -94.13,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_0_HS_1_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": 174.37,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.01
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_21F1E783_2D38_F567_41C6_22CE1262DD2A",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 174.37,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_0_HS_2_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.01
       }
      ]
     },
     {
      "inertia": false,
      "id": "panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_tcap0",
      "rotate": false,
      "hfov": 48,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 20.09,
        "yaw": 176.45,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 42,
           "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -28.94
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2FE274A7_3738_C267_41C4_AFE541978294",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 176.45,
        "hfov": 20.09,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 156,
           "width": 410,
           "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28.94
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 26.45,
        "yaw": -88.64,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -39.59
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2C735C85_3738_C21B_41C7_37A648D82CCC",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -88.64,
        "hfov": 26.45,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 613,
           "width": 613,
           "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -39.59
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": -97.19,
   "class": "PanoramaCameraPosition",
   "pitch": -5.22
  },
  "id": "panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_2292B498_2FAF_7CEE_41C1_6C1D7227D2E2",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "WAT TO G10,STAFF ROOMS",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 9.83,
        "yaw": -55.84,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.35
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3B346F62_2D50_7C43_41C5_94ADE53F62CB",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 14)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -55.84,
        "hfov": 9.83,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17.35
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 9.82,
        "yaw": -144.93,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_1_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.55
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3B5F90BC_2D50_24C7_41A9_2A253F735F25",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 13)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -144.93,
        "hfov": 9.82,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17.55
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.26,
        "yaw": 92.08,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -4.58
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_38E38DBD_2D50_3CC1_41B2_4D1E4F0EB6E6",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 15)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 92.08,
        "hfov": 10.26,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": 100.18,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -27.44
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_38FF076A_2D50_6C43_41C0_BE8B8DFF888E",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 5)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 100.18,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_3_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": -170.87,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.88
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3A246807_2D70_63C1_41BD_B0B734CD5456",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 18)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -170.87,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_4_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.88
       }
      ]
     },
     {
      "inertia": false,
      "id": "panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_tcap0",
      "rotate": false,
      "hfov": 48,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 11.35,
        "yaw": -52.65,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 28,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -23.77
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2FE2511E_3739_C229_41B6_A9513AC10211",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -52.65,
        "hfov": 11.35,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 126,
           "width": 221,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.77
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 8.38,
        "yaw": -143.77,
        "image": {
         "levels": [
          {
           "height": 15,
           "width": 25,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -24.14
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2CE021A3_3738_C21F_41B5_F8C301716473",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -143.77,
        "hfov": 8.38,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 103,
           "width": 164,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.14
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.14,
        "yaw": 94.62,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 30,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.06
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2CEEE397_373F_C627_41A8_EE6D15FE1A70",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 94.62,
        "hfov": 10.14,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 97,
           "width": 184,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.06
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 17.12,
        "yaw": -170.27,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 55,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_8_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -24.2
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2CBC07A8_3739_4E69_41C7_ECBBD4E04B5A",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -170.27,
        "hfov": 17.12,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 97,
           "width": 335,
           "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.2
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 114.49,
   "class": "PanoramaCameraPosition",
   "pitch": -4.39
  },
  "id": "panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_22B51CA9_2FAE_CC2E_41B4_A5BBB73AEA0C",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "1st Floor",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "offsetY": 70.81,
        "width": 141.61,
        "yaw": -91.8,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -24.97
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3D0D687B_2D7B_BBA6_41BC_ECF441DAA13C",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 19)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -91.8,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_0_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": 88.92,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.51
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3C33038B_2D7B_ED67_4162_240CB702B280",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 20)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 88.92,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_1_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.51
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 7.57,
        "yaw": 11.91,
        "image": {
         "levels": [
          {
           "height": 60,
           "width": 77,
           "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -29.75
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3FF1BD8F_2D79_D57F_41C5_7720AA42F9E7",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 11.91,
        "hfov": 7.57,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 121,
           "width": 155,
           "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -29.75
       }
      ]
     },
     {
      "inertia": false,
      "id": "panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_tcap0",
      "rotate": false,
      "hfov": 68.4,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 21.15,
        "yaw": -90.69,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 48,
           "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -28.46
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3FB9CBC1_2D78_DCE2_41C6_3CEB3744347E",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 19)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -90.69,
        "hfov": 21.15,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 429,
           "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28.46
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 27.37,
        "yaw": 94.82,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -37.12
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3FC32ECD_2D67_54E2_4187_163AC5537F46",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 20)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 94.82,
        "hfov": 27.37,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 613,
           "width": 613,
           "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -37.12
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": -1.92,
   "class": "PanoramaCameraPosition",
   "pitch": -1.65
  },
  "id": "panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_22BEA209_2FAE_F7EE_41C0_8DFA69162F07",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "ITP_G01",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_tcap0",
      "rotate": false,
      "hfov": 64.8,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 10.07,
        "yaw": 87.89,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.06
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_226B4BDF_2CF0_2440_41BF_B3E1001A7C4C",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 3)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 87.89,
        "hfov": 10.07,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.06
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": -0.74,
   "class": "PanoramaCameraPosition",
   "pitch": -18.86
  },
  "id": "panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_22AE9859_2FA9_9F37_41C0_899DAEFB5DCF",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_22AE9859_2FA9_9F37_41C0_899DAEFB5DCF.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_22AE9859_2FA9_9F37_41C0_899DAEFB5DCF.ogg"
    },
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "Innovation Hub",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_tcap0",
      "rotate": false,
      "hfov": 64.8,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 10.33,
        "yaw": 172.83,
        "image": {
         "levels": [
          {
           "height": 113,
           "width": 103,
           "url": "media/panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -27.06
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_237EBAEA_2CF0_E443_417D_58C61FC99E6E",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 2)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 172.83,
        "hfov": 10.33,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 226,
           "width": 207,
           "url": "media/panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -27.06
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": -16.83,
   "class": "PanoramaCameraPosition",
   "pitch": -23.75
  },
  "id": "panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_22C6E070_2FA9_743F_41AE_274FD9EF9ED2",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "ITP_G03",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 10.06,
        "yaw": 100.11,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.27
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3D145366_2C6D_1396_41B8_EC8901164EFF",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 100.11,
        "hfov": 10.06,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.27
       }
      ]
     },
     {
      "inertia": false,
      "id": "panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_tcap0",
      "rotate": false,
      "hfov": 49.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 10.78,
   "class": "PanoramaCameraPosition",
   "pitch": -4.3
  },
  "id": "panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_22F8A610_2FA9_5FFE_41C7_AD5D6DE38C5D",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_29B2571E_27EF_3967_41B9_C3461B159A21",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_29B2571E_27EF_3967_41B9_C3461B159A21_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "ITP_G04",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_29B2571E_27EF_3967_41B9_C3461B159A21_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 14.6,
        "yaw": -92.63,
        "image": {
         "levels": [
          {
           "height": 126,
           "width": 136,
           "url": "media/panorama_29B2571E_27EF_3967_41B9_C3461B159A21_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.66
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3893CD2D_2C9B_379B_41C4_BF654FDEFEC8",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 18)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -92.63,
        "hfov": 14.6,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 252,
           "width": 272,
           "url": "media/panorama_29B2571E_27EF_3967_41B9_C3461B159A21_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.66
       }
      ]
     },
     {
      "inertia": false,
      "id": "panorama_29B2571E_27EF_3967_41B9_C3461B159A21_tcap0",
      "rotate": false,
      "hfov": 49.2,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_29B2571E_27EF_3967_41B9_C3461B159A21_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_29B2571E_27EF_3967_41B9_C3461B159A21.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 6.04,
   "class": "PanoramaCameraPosition",
   "pitch": -29.93
  },
  "id": "panorama_29B2571E_27EF_3967_41B9_C3461B159A21_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_22E88B77_2FA9_B422_41C5_09FB0A1C2AFF",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "ITP_G06",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 10.07,
        "yaw": 100.86,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.99
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3F5E9142_2C97_0F89_41BA_2E51E243AA45",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 18)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 100.86,
        "hfov": 10.07,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.99
       }
      ]
     },
     {
      "inertia": false,
      "id": "panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_tcap0",
      "rotate": false,
      "hfov": 51.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 4.03,
   "class": "PanoramaCameraPosition",
   "pitch": -33.29
  },
  "id": "panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_22213E85_2FA9_CCE6_41C4_587305F5551F",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "ITP_G07",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_tcap0",
      "rotate": false,
      "hfov": 51.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 13.82,
        "yaw": -91.8,
        "image": {
         "levels": [
          {
           "height": 114,
           "width": 128,
           "url": "media/panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -16.52
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_232505A5_2CD0_ECC1_41C1_34DE7CF2F6EF",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -91.8,
        "hfov": 13.82,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 228,
           "width": 257,
           "url": "media/panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.52
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "hfov": 120,
   "yaw": 3.02,
   "class": "PanoramaCameraPosition",
   "pitch": -30.47
  },
  "id": "panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_2239C1C8_2FA9_D46F_41A6_D86A00774BFF",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "ITP_G09",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_tcap0",
      "rotate": false,
      "hfov": 48,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 8,
        "yaw": 75.33,
        "image": {
         "levels": [
          {
           "height": 87,
           "width": 72,
           "url": "media/panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.04
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3DC1DD46_2CD0_1C43_41A4_4CDAAD8F47DC",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 75.33,
        "hfov": 8,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 174,
           "width": 144,
           "url": "media/panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.04
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": -7.96,
   "class": "PanoramaCameraPosition",
   "pitch": -32.4
  },
  "id": "panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_22569882_2FA9_B4E3_41C0_50A1959294D4",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "ITP_G10",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_tcap0",
      "rotate": false,
      "hfov": 50.4,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 10.12,
        "yaw": -94.41,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.69
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3D53F00D_2CD0_23C1_41BA_59059F41968E",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 6)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -94.41,
        "hfov": 10.12,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.69
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 3.29,
   "class": "PanoramaCameraPosition",
   "pitch": -26.08
  },
  "id": "panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_2C1E2F15_3778_BE3B_41C9_360E0ED766A1",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_2C1E2F15_3778_BE3B_41C9_360E0ED766A1.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_2C1E2F15_3778_BE3B_41C9_360E0ED766A1.ogg"
    },
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "StageView of Seminar_hall",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_tcap0",
      "rotate": false,
      "hfov": 48,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 9.23,
        "yaw": -180.39,
        "image": {
         "levels": [
          {
           "height": 57,
           "width": 86,
           "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_22FBF3CD_2D58_ACE3_41C6_48F28D60F13B",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 17)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -180.39,
        "hfov": 9.23,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 172,
           "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 26.8,
        "yaw": -172,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 85,
           "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.35
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_23B1C687_2D5F_D76F_4190_8537E95EA322",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 17)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -172,
        "hfov": 26.8,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 97,
           "width": 517,
           "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.35
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 9.05,
        "yaw": -115.21,
        "image": {
         "levels": [
          {
           "height": 77,
           "width": 82,
           "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.21
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_22B3C43E_2D5B_6B9E_4179_FB6952396DC8",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -115.21,
        "hfov": 9.05,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 154,
           "width": 164,
           "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.21
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": -178.08,
   "class": "PanoramaCameraPosition",
   "pitch": -34.04
  },
  "id": "panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_2275E3D7_2FA9_5462_41BC_590CC652C15C",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_2985A949_27E9_49EA_41C1_E3247DC3654B",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "AudienceView of Seminar_hall",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_tcap0",
      "rotate": false,
      "hfov": 45,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 10.14,
        "yaw": 120.15,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.07
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3DCA32A3_2D69_ECA6_41B1_0A326B300A0B",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 4)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 120.15,
        "hfov": 10.14,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.07
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 14.48,
        "yaw": 177.38,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 33,
           "url": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.13
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3DEADD69_2D6B_B5A2_41C4_FDB513C41648",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 16)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 177.38,
        "hfov": 14.48,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 123,
           "width": 258,
           "url": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.13
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_2985A949_27E9_49EA_41C1_E3247DC3654B.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 176.81,
   "class": "PanoramaCameraPosition",
   "pitch": -1.92
  },
  "id": "panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_2279311B_2FAA_D5E1_4184_109B0FB01661",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "WAY TO G07",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 10.13,
        "yaw": -16.1,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.28
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3E425113_2C9D_0F8F_41C1_23EEE084083C",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 11)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -16.1,
        "hfov": 10.13,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": 8.55,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 183.96,
        "offsetX": 91.98,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.41
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3D5727AF_2C9D_F297_41C5_9BED189AD52A",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 19)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 8.55,
        "offsetX": 91.98,
        "offsetY": 91.98,
        "width": 141.62,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.62,
        "image": {
         "levels": [
          {
           "height": 183,
           "width": 183,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_1_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.41
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 9.98,
        "yaw": 70.04,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.12
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3E394E37_2C9D_35F7_41C5_7A948499B145",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 12)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 70.04,
        "hfov": 9.98,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": -175.26,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.62,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.89
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3F39E688_2C9D_129A_41C5_730C5BB433CD",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 1)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -175.26,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.62,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.62,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_3_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": 96.6,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 183.96,
        "offsetX": 91.98,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.19
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3FB599DF_2C9F_1EB7_41C1_BA5666B2D71E",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 6)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 96.6,
        "offsetX": 91.98,
        "offsetY": 91.98,
        "width": 141.62,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.62,
        "image": {
         "levels": [
          {
           "height": 183,
           "width": 183,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_4_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.19
       }
      ]
     },
     {
      "inertia": false,
      "id": "panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_tcap0",
      "rotate": false,
      "hfov": 48,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 11.16,
        "yaw": -13.74,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 24,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -17.47
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2FD90F56_3738_DE39_41C9_2BF2ECEA1D42",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -13.74,
        "hfov": 11.16,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 134,
           "width": 209,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17.47
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 9.28,
        "yaw": 71.91,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 24,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -20.59
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2C8184A9_3739_C26B_4190_0AC33ADBBAAF",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 71.91,
        "hfov": 9.28,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 115,
           "width": 177,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -20.59
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 22.07,
        "yaw": 10.71,
        "image": {
         "levels": [
          {
           "height": 15,
           "width": 63,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_8_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.07
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2FD66DD8_3727_4229_41B1_97109EAE7C1A",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 10.71,
        "hfov": 22.07,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 107,
           "width": 425,
           "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.07
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 96.09,
   "class": "PanoramaCameraPosition",
   "pitch": -9.61
  },
  "id": "panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_219FF965_2FAA_D426_41C4_B795582BB8EC",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "Way to CC6",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_tcap0",
      "rotate": false,
      "hfov": 66,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "offsetY": 148.89,
        "width": 297.78,
        "yaw": -89.12,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 297.78,
        "offsetX": 148.89,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.94
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3E3027DE_2D69_B4E1_41B6_2B95B58A430E",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 18)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -89.12,
        "offsetX": 148.89,
        "offsetY": 148.89,
        "width": 141.62,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.62,
        "image": {
         "levels": [
          {
           "height": 297,
           "width": 297,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_0_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -23.94
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 45.84,
        "yaw": -74.76,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 78,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -28.85
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_38073049_2D69_6BE3_419E_BEAA899FE1F9",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -74.76,
        "hfov": 45.84,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 190,
           "width": 935,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -28.85
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.29,
        "yaw": -27.69,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -0.81
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_38E3BE93_2D58_D766_415B_E5A36F52734A",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 25)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -27.69,
        "hfov": 10.29,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -0.81
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.16,
        "yaw": -27.22,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 17,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -8.78
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3844ACD4_2D58_D4E1_41C0_13E40A0E3393",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 25)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -27.22,
        "hfov": 10.16,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 169,
           "width": 183,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": 90.02,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -19.2
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3A51B78D_2D59_B563_41B5_234B5FD781B1",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 7)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 90.02,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.62,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.62,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_5_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": -0.17,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 94.41,
        "offsetX": 47.21,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_6_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.89
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3A67218D_2D59_ED63_41C2_2D643B5CEE23",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 21)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -0.17,
        "offsetX": 47.21,
        "offsetY": 47.21,
        "width": 94.41,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 94.41,
        "image": {
         "levels": [
          {
           "height": 94,
           "width": 94,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_6_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -5.89
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 28.23,
        "yaw": 165.93,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 144,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_7_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.45
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_25F84825_3527_421B_41B9_70B2E717B825",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "roll": 0,
        "yaw": 165.93,
        "hfov": 28.23,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 711,
           "width": 514,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.45
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 25.81,
        "yaw": -166.8,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 132,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_8_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.6
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_251B98A9_3527_4268_41C1_8CA5B5B7047F",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "roll": 0,
        "yaw": -166.8,
        "hfov": 25.81,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 707,
           "width": 469,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_8_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.6
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 31.95,
        "yaw": 99.08,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 104,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_9_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.42
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2C0A44B7_372B_C267_41B3_1CECA1932A70",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 99.08,
        "hfov": 31.95,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 94,
           "width": 613,
           "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_0_HS_9_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.42
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_21B1133D_2FAB_5421_41A7_A4DCEA8D7680",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "Way to CC8",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_tcap0",
      "rotate": false,
      "hfov": 66,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "offsetY": 70.81,
        "width": 141.61,
        "yaw": -0.72,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.59
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3A6339F7_2D2F_DCAF_41C4_6F48A56B410D",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 22)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -0.72,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.62,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.62,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_0_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": -87.41,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -27.58
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3A886239_2D2F_6FA3_41B3_8FB64F1D29AB",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 7)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -87.41,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.62,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.62,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_1_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -27.58
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.2,
        "yaw": 98.18,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_2_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.62
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_35FB2848_2D28_BBE2_41C3_BD1D392E0E56",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 26)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 98.18,
        "hfov": 10.2,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.62
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 9.2,
        "yaw": 98.02,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 18,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13.88
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3AAAE875_2D28_FBA3_4197_59E8962FEDE9",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 26)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 98.02,
        "hfov": 9.2,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 145,
           "width": 169,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13.88
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 24.63,
        "yaw": -2.38,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 76,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -21.52
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_35D91E80_2D2B_5761_4190_CC8006110A4C",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 22)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -2.38,
        "hfov": 24.63,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 99,
           "width": 473,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -21.52
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 15.94,
        "yaw": 172.52,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 81,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_5_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -13
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_25250CAA_3518_C269_41B4_B6F3C98627A0",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "roll": 0,
        "yaw": 172.52,
        "hfov": 15.94,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 701,
           "width": 286,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -13
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 12.54,
        "yaw": -174.09,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 64,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_6_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -12.99
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_241C855B_3519_C22F_41A2_B4E0417E21F3",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "roll": 0,
        "yaw": -174.09,
        "hfov": 12.54,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 698,
           "width": 225,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -12.99
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 29.5,
        "yaw": -79.72,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 90,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_7_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -30.74
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2C2AE52B_372F_426F_41AE_3F280789D1CB",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -79.72,
        "hfov": 29.5,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 108,
           "width": 613,
           "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -30.74
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_21CB6711_2FAB_7DE1_41AB_CAC4333A9908",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "Way to CC5",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_tcap0",
      "rotate": false,
      "hfov": 60,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "offsetY": 70.81,
        "width": 141.61,
        "yaw": -87.06,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -18.38
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_347F4891_2D38_DB62_41B0_1E6FA9F2CE0A",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 22)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -87.06,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_0_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": 2.99,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17.21
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_37606AB9_2D3F_7CA2_41B8_6B9577923E41",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 19)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 2.99,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_1_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -17.21
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 35.59,
        "yaw": -83.39,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 33,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -27.2
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_37433159_2D3F_ADE2_41A6_3A91598E1A80",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 22)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -83.39,
        "hfov": 35.59,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 339,
           "width": 715,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -27.2
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 36.58,
        "yaw": 13.3,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 20,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_3_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -33.96
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_224154B7_2FA8_977A_41B6_0A8615B3AF36",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 13.3,
        "hfov": 36.58,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 613,
           "width": 788,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -33.96
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 22.85,
        "yaw": -165.75,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 137,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_4_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.54
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_25A09EB0_3519_DE79_4182_DE30472A8FD4",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "roll": 0,
        "yaw": -165.75,
        "hfov": 22.85,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 598,
           "width": 413,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.54
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 2.21,
        "yaw": -179,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 12,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_5_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.69
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2472884F_3569_C227_41B8_4F7D76B5A9BF",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "roll": 0,
        "yaw": -179,
        "hfov": 2.21,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 604,
           "width": 39,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.69
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 22.18,
        "yaw": 169.37,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 128,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_6_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -11.58
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_27B4BF45_356B_BE1B_41C7_549EE7D52CE5",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "roll": 0,
        "yaw": 169.37,
        "hfov": 22.18,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 624,
           "width": 401,
           "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.58
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_21E9529F_2FAB_D4E2_419C_3841B5C98CEA",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_3DC53593_2D68_D566_41A2_BD7032EE4536",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "Way to CC 1 & 2",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_tcap0",
      "rotate": false,
      "hfov": 58.8,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "offsetY": 70.81,
        "width": 141.61,
        "yaw": 0.11,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 141.61,
        "offsetX": 70.81,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -16.32
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_3495D17C_2D27_EDA1_41A0_A607D935E0B7",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 20)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 0.11,
        "offsetX": 70.81,
        "offsetY": 70.81,
        "width": 141.61,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 141.61,
        "image": {
         "levels": [
          {
           "height": 141,
           "width": 141,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_0_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
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
        "yaw": 89.08,
        "class": "FlatHotspotPanoramaOverlayMap",
        "height": 94.41,
        "offsetX": 47.21,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.29
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_374A0064_2D28_ABA2_41B0_68227FDDB899",
      "class": "FlatHotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 21)",
        "class": "FlatHotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 89.08,
        "offsetX": 47.21,
        "offsetY": 47.21,
        "width": 94.41,
        "class": "FlatHotspotPanoramaOverlayImage",
        "height": 94.41,
        "image": {
         "levels": [
          {
           "height": 94,
           "width": 94,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_1_0.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -11.29
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 42.84,
        "yaw": 10.93,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 54,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_2_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -22.88
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_37E9C831_2D2B_5BA3_4175_E69CCB5AFA06",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 20)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 10.93,
        "hfov": 42.84,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 244,
           "width": 831,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_2_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -22.88
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.15,
        "yaw": 105.12,
        "image": {
         "levels": [
          {
           "height": 92,
           "width": 92,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_3_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -9.77
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_317517C1_2D29_74E2_4193_A035F76EA93A",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 23)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 105.12,
        "hfov": 10.15,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 184,
           "width": 184,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_3_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -9.77
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 30.63,
        "yaw": 113.83,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 108,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_4_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -15.5
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_369250F9_2D28_ACA3_419A_458C473676F2",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 23)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 113.83,
        "hfov": 30.63,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 84,
           "width": 568,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_4_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -15.5
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 33.79,
        "yaw": 183.09,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 16,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_5_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -10.07
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_21A6F724_3057_F11E_41C3_B259DAB60F8B",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 183.09,
        "hfov": 33.79,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 613,
           "width": 613,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_5_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -10.07
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 16.73,
        "yaw": 172.18,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 75,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_6_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.22
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_21DD7267_3058_931B_4195_320D140D6818",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "roll": 0,
        "yaw": 172.18,
        "hfov": 16.73,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 791,
           "width": 301,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_6_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.22
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 17.28,
        "yaw": -172.83,
        "image": {
         "levels": [
          {
           "height": 200,
           "width": 79,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_7_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -14.35
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_216FEFCA_3059_B115_4195_23B0C558EFE4",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "roll": 0,
        "yaw": -172.83,
        "hfov": 17.28,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 783,
           "width": 311,
           "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_0_HS_7_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -14.35
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_3DC53593_2D68_D566_41A2_BD7032EE4536.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_2C3504AE_3778_C269_41C9_08C99473BDE4",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_2C3504AE_3778_C269_41C9_08C99473BDE4.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_2C3504AE_3778_C269_41C9_08C99473BDE4.ogg"
    },
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_3C74261A_2D78_B761_41C1_C81907AC7616",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "CC1",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_3C74261A_2D78_B761_41C1_C81907AC7616_tcap0",
      "rotate": false,
      "hfov": 60,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 6.39,
        "yaw": -20.96,
        "image": {
         "levels": [
          {
           "height": 54,
           "width": 57,
           "url": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -2.08
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_312CC8C6_2DD8_DCEE_41AD_F5361CF55493",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 24)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -20.96,
        "hfov": 6.39,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 108,
           "width": 114,
           "url": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -2.08
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 10.86,
        "yaw": -19.56,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 34,
           "url": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.05
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_338B3097_2DDF_AB6E_41C2_88590DF77C00",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 24)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": -19.56,
        "hfov": 10.86,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 91,
           "width": 194,
           "url": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.05
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_3C74261A_2D78_B761_41C1_C81907AC7616.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_3C74261A_2D78_B761_41C1_C81907AC7616_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_2C6B3544_377F_4219_41B2_643A31E1BBC6",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_2C6B3544_377F_4219_41B2_643A31E1BBC6.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_2C6B3544_377F_4219_41B2_643A31E1BBC6.ogg"
    },
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "CC2",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_tcap0",
      "rotate": false,
      "hfov": 64.8,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 7.35,
        "yaw": 33.87,
        "image": {
         "levels": [
          {
           "height": 62,
           "width": 65,
           "url": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.18
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_332F5130_2DD8_ADA1_41B0_134ED2280BBA",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 22)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 33.87,
        "hfov": 7.35,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 125,
           "width": 131,
           "url": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.18
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 21.75,
        "yaw": 38.33,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 42,
           "url": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 2.87
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_301DF789_2DE7_7562_41AB_D89BDB009015",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 22)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 38.33,
        "hfov": 21.75,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 147,
           "width": 389,
           "url": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 2.87
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_2CE90177_377F_C2E7_41BC_156C59AB5D45",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_2CE90177_377F_C2E7_41BC_156C59AB5D45.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_2CE90177_377F_C2E7_41BC_156C59AB5D45.ogg"
    },
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "CC6",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_tcap0",
      "rotate": false,
      "hfov": 56.4,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 6.96,
        "yaw": 12.56,
        "image": {
         "levels": [
          {
           "height": 64,
           "width": 62,
           "url": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -1.69
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_32A78B20_2DEF_DDA1_41AD_E9877A31A135",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 19)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 12.56,
        "hfov": 6.96,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 128,
           "width": 124,
           "url": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -1.69
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 34.27,
        "yaw": 24.25,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 105,
           "url": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 3.16
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_33B0A82F_2DEF_7BBE_41B3_E2C8E1EB6053",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 19)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 24.25,
        "hfov": 34.27,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 93,
           "width": 613,
           "url": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 3.16
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_2CF89666_377F_4E19_41BE_012EC6107A1F",
    "class": "PanoramaAudio",
    "audio": {
     "mp3Url": "media/audio_2CF89666_377F_4E19_41BE_012EC6107A1F.mp3",
     "class": "AudioResource",
     "oggUrl": "media/audio_2CF89666_377F_4E19_41BE_012EC6107A1F.ogg"
    },
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "CC8",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_t.jpg",
    "overlays": [
     {
      "inertia": false,
      "id": "panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_tcap0",
      "rotate": false,
      "hfov": 45,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     },
     {
      "maps": [
       {
        "hfov": 6.9,
        "yaw": 166.94,
        "image": {
         "levels": [
          {
           "height": 69,
           "width": 61,
           "url": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -3.56
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_32C9BD5F_2DE7_559F_4182_5FB71A0A8B64",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 20)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 166.94,
        "hfov": 6.9,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 139,
           "width": 123,
           "url": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -3.56
       }
      ]
     },
     {
      "maps": [
       {
        "hfov": 17.72,
        "yaw": 171.23,
        "image": {
         "levels": [
          {
           "height": 16,
           "width": 38,
           "url": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_0_HS_1_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": 0.83
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_32BC5905_2DE7_FD62_41A7_FF12CABCD4F9",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 20)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 171.23,
        "hfov": 17.72,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 131,
           "width": 316,
           "url": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_0_HS_1_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": 0.83
       }
      ]
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 7.69,
   "class": "PanoramaCameraPosition",
   "pitch": 0.27
  },
  "id": "panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10
 },
 {
  "hfovMin": 60,
  "hfov": 360,
  "audios": [
   {
    "id": "audio_3AE0123F_3529_4667_41A2_DC5683AF999E",
    "class": "PanoramaAudio",
    "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
    "autoplay": true
   }
  ],
  "hfovMax": 120,
  "id": "panorama_2068E816_3058_BF3A_41A1_5B30325C8612",
  "partial": false,
  "pitch": 0,
  "vfov": 180,
  "thumbnailUrl": "media/panorama_2068E816_3058_BF3A_41A1_5B30325C8612_t.jpg",
  "cardboardMenu": "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
  "label": "Outside of IT PARK",
  "frames": [
   {
    "thumbnailUrl": "media/panorama_2068E816_3058_BF3A_41A1_5B30325C8612_t.jpg",
    "overlays": [
     {
      "maps": [
       {
        "hfov": 9.05,
        "yaw": 177.1,
        "image": {
         "levels": [
          {
           "height": 113,
           "width": 81,
           "url": "media/panorama_2068E816_3058_BF3A_41A1_5B30325C8612_0_HS_0_0_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotPanoramaOverlayMap",
        "pitch": -7.57
       }
      ],
      "enabledInCardboard": true,
      "id": "overlay_2099C190_3058_9135_4187_730E24101A64",
      "class": "HotspotPanoramaOverlay",
      "areas": [
       {
        "mapColor": "#FF0000",
        "click": "this.mainPlayList.set('selectedIndex', 0)",
        "class": "HotspotPanoramaOverlayArea"
       }
      ],
      "useHandCursor": true,
      "rollOverDisplay": false,
      "items": [
       {
        "yaw": 177.1,
        "hfov": 9.05,
        "class": "HotspotPanoramaOverlayImage",
        "image": {
         "levels": [
          {
           "height": 226,
           "width": 163,
           "url": "media/panorama_2068E816_3058_BF3A_41A1_5B30325C8612_0_HS_0_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "pitch": -7.57
       }
      ]
     },
     {
      "inertia": false,
      "id": "panorama_2068E816_3058_BF3A_41A1_5B30325C8612_tcap0",
      "rotate": false,
      "hfov": 51.6,
      "image": {
       "levels": [
        {
         "height": 850,
         "width": 850,
         "url": "media/panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_tcap0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "angle": 0,
      "class": "TripodCapPanoramaOverlay"
     }
    ],
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 3217,
       "width": 6434,
       "url": "media/panorama_2068E816_3058_BF3A_41A1_5B30325C8612_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2497,
       "width": 4995,
       "url": "media/panorama_2068E816_3058_BF3A_41A1_5B30325C8612.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "class": "Panorama"
 },
 {
  "initialPosition": {
   "yaw": 0,
   "class": "PanoramaCameraPosition",
   "pitch": 0
  },
  "id": "panorama_2068E816_3058_BF3A_41A1_5B30325C8612_camera",
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialSequence": {
   "movements": [
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out"
    }
   ],
   "class": "PanoramaCameraSequence",
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "id": "mainPlayList",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_camera",
    "media": "this.panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_camera",
    "media": "this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_camera",
    "media": "this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_37259611_27D1_394E_4185_29297B435B99_camera",
    "media": "this.panorama_37259611_27D1_394E_4185_29297B435B99",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_camera",
    "media": "this.panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_camera",
    "media": "this.panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_camera",
    "media": "this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_camera",
    "media": "this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_camera",
    "media": "this.panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_camera",
    "media": "this.panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_camera",
    "media": "this.panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29B2571E_27EF_3967_41B9_C3461B159A21_camera",
    "media": "this.panorama_29B2571E_27EF_3967_41B9_C3461B159A21",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_camera",
    "media": "this.panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_camera",
    "media": "this.panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_camera",
    "media": "this.panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_camera",
    "media": "this.panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_camera",
    "media": "this.panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_camera",
    "media": "this.panorama_2985A949_27E9_49EA_41C1_E3247DC3654B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_camera",
    "media": "this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_camera",
    "media": "this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_camera",
    "media": "this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_camera",
    "media": "this.panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_camera",
    "media": "this.panorama_3DC53593_2D68_D566_41A2_BD7032EE4536",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3C74261A_2D78_B761_41C1_C81907AC7616_camera",
    "media": "this.panorama_3C74261A_2D78_B761_41C1_C81907AC7616",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_camera",
    "media": "this.panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_camera",
    "media": "this.panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_camera",
    "media": "this.panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_2068E816_3058_BF3A_41A1_5B30325C8612_camera",
    "media": "this.panorama_2068E816_3058_BF3A_41A1_5B30325C8612",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 0)",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 {
  "id": "thumbnaillist5245_playlist",
  "class": "PlayList",
  "items": [
   {
    "camera": "this.panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1_camera",
    "media": "this.panorama_2D977A89_27A2_9ADF_41C0_A61BDA689FB1",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97_camera",
    "media": "this.panorama_353E9F1E_27A7_7BF2_41A4_BB413D7D9F97",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4_camera",
    "media": "this.panorama_37ED78F8_27DF_2ABE_41A5_1ECC9B8D75C4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_37259611_27D1_394E_4185_29297B435B99_camera",
    "media": "this.panorama_37259611_27D1_394E_4185_29297B435B99",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1_camera",
    "media": "this.panorama_35DE1104_27F1_3B56_41B1_FDA16F5071E1",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20_camera",
    "media": "this.panorama_36BA82B3_27F7_3EB2_41B8_AC83D6A47F20",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30_camera",
    "media": "this.panorama_3678C3F8_27F1_5EBD_41BE_C6692C1B4B30",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC_camera",
    "media": "this.panorama_2A5E3B5C_27FB_49EA_41C2_6E6F328D91FC",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76_camera",
    "media": "this.panorama_2901E05B_27EE_D7EE_41C1_F88D64BC4F76",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 9)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5_camera",
    "media": "this.panorama_29BC4F03_27EE_C95D_41B7_F04AA0F4C2B5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 9, 10)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1_camera",
    "media": "this.panorama_29BCE519_27EF_596D_41BF_21E53B6B8EF1",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 10, 11)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29B2571E_27EF_3967_41B9_C3461B159A21_camera",
    "media": "this.panorama_29B2571E_27EF_3967_41B9_C3461B159A21",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 11, 12)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19_camera",
    "media": "this.panorama_29BD0CE9_27EF_C8AA_41A5_E79A33187A19",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 12, 13)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9_camera",
    "media": "this.panorama_29B7DCC9_27EF_48ED_41A9_874D10E847D9",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 13, 14)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD_camera",
    "media": "this.panorama_29BDC6BE_27EF_38A7_4197_42703C81A9DD",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 14, 15)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242_camera",
    "media": "this.panorama_29B834B7_27EE_F8A6_41A2_D7A19D56B242",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 15, 16)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5_camera",
    "media": "this.panorama_2902754F_27EB_D9E6_41B9_2DEBD673B2F5",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 16, 17)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_2985A949_27E9_49EA_41C1_E3247DC3654B_camera",
    "media": "this.panorama_2985A949_27E9_49EA_41C1_E3247DC3654B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 17, 18)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA_camera",
    "media": "this.panorama_3D4BD751_2C6D_138B_41C5_E2B94C6D1ABA",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 18, 19)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF_camera",
    "media": "this.panorama_22549BB3_2D27_7CA7_41BA_0C82928759FF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 19, 20)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF_camera",
    "media": "this.panorama_3D820FB9_2D68_F4A2_4183_C32DCA25E6EF",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 20, 21)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F_camera",
    "media": "this.panorama_3DB431F8_2D69_6CA2_41C4_5FFF013A539F",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 21, 22)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3DC53593_2D68_D566_41A2_BD7032EE4536_camera",
    "media": "this.panorama_3DC53593_2D68_D566_41A2_BD7032EE4536",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 22, 23)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3C74261A_2D78_B761_41C1_C81907AC7616_camera",
    "media": "this.panorama_3C74261A_2D78_B761_41C1_C81907AC7616",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 23, 24)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3_camera",
    "media": "this.panorama_3DA6E0B5_2D79_6CA3_4190_C8B065DE9BA3",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 24, 25)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037_camera",
    "media": "this.panorama_3DE1FAF3_2D79_DCA7_41B1_8933AE7D6037",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 25, 26)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0_camera",
    "media": "this.panorama_3DF1D5E6_2D79_B4A1_41B6_E91E840FF0E0",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 26, 27)",
    "player": "this.MainViewerPanoramaPlayer"
   },
   {
    "camera": "this.panorama_2068E816_3058_BF3A_41A1_5B30325C8612_camera",
    "media": "this.panorama_2068E816_3058_BF3A_41A1_5B30325C8612",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 27, 0)",
    "player": "this.MainViewerPanoramaPlayer"
   }
  ]
 },
 "this.Menu_2D56B7C9_3719_4E2B_41B3_60705EE0E47F",
 {
  "id": "audio_0E99EC8E_2DE8_BB61_419D_B3AE80B19E23",
  "class": "PanoramaAudio",
  "audio": {
   "mp3Url": "media/audio_0E99EC8E_2DE8_BB61_419D_B3AE80B19E23.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_0E99EC8E_2DE8_BB61_419D_B3AE80B19E23.ogg"
  },
  "autoplay": true
 },
 {
  "id": "audio_0C56742E_2DE9_6BA1_41AC_D236B2DA2A5F",
  "class": "PanoramaAudio",
  "audio": {
   "mp3Url": "media/audio_0DF14580_2DF9_D562_41C5_0B11F5B0D218.mp3",
   "id": "audioresource_0C56442E_2DE9_6BA1_41AB_BEB63BA5C3BE",
   "class": "AudioResource",
   "oggUrl": "media/audio_0DF14580_2DF9_D562_41C5_0B11F5B0D218.ogg"
  },
  "autoplay": true
 },
 {
  "id": "audio_23B58540_2FA6_FC5E_41C0_E7599CEC1CDA",
  "class": "PanoramaAudio",
  "audio": {
   "mp3Url": "media/audio_23B58540_2FA6_FC5E_41C0_E7599CEC1CDA.mp3",
   "id": "audioresource_232E9D8F_2FA6_CCE1_41A8_5242ED5BA926",
   "class": "AudioResource",
   "oggUrl": "media/audio_23B58540_2FA6_FC5E_41C0_E7599CEC1CDA.ogg"
  },
  "autoplay": true
 },
 {
  "id": "audio_232EAD8F_2FA6_CCE1_41C5_562AB0D59FF3",
  "class": "PanoramaAudio",
  "audio": "this.audioresource_232E9D8F_2FA6_CCE1_41A8_5242ED5BA926",
  "autoplay": true
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
  "id": "audio_22DF0A47_2FAE_D462_418D_8D18B34F3EFF",
  "class": "PanoramaAudio",
  "audio": "this.audioresource_234BFDED_2FAF_4C21_41A9_5C07F1BF1182",
  "autoplay": true
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
 {
  "id": "audio_21F4E057_2FAB_5462_41C2_0652BEE11A0F",
  "class": "PanoramaAudio",
  "audio": {
   "mp3Url": "media/audio_21F4E057_2FAB_5462_41C2_0652BEE11A0F.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_21F4E057_2FAB_5462_41C2_0652BEE11A0F.ogg"
  },
  "autoplay": true
 },
 {
  "id": "audio_21010EAA_2FAB_4C22_41B0_1499A05AE406",
  "class": "PanoramaAudio",
  "audio": {
   "mp3Url": "media/audio_21010EAA_2FAB_4C22_41B0_1499A05AE406.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_21010EAA_2FAB_4C22_41B0_1499A05AE406.ogg"
  },
  "autoplay": true
 },
 {
  "id": "audio_2135AF43_2FAA_CC61_4191_AE63101DD7C9",
  "class": "PanoramaAudio",
  "audio": {
   "mp3Url": "media/audio_2135AF43_2FAA_CC61_4191_AE63101DD7C9.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_2135AF43_2FAA_CC61_4191_AE63101DD7C9.ogg"
  },
  "autoplay": true
 },
 {
  "id": "audio_21686B11_2FAA_B5FE_41C5_02A5CCF1907B",
  "class": "PanoramaAudio",
  "audio": {
   "mp3Url": "media/audio_21686B11_2FAA_B5FE_41C5_02A5CCF1907B.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_21686B11_2FAA_B5FE_41C5_02A5CCF1907B.ogg"
  },
  "autoplay": true
 },
 {
  "id": "audio_2309F02C_2FB7_8F6E_41A7_0EB34FB20754",
  "class": "PanoramaAudio",
  "audio": {
   "mp3Url": "media/audio_2309F02C_2FB7_8F6E_41A7_0EB34FB20754.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_2309F02C_2FB7_8F6E_41A7_0EB34FB20754.ogg"
  },
  "autoplay": true
 },
 "this.audio_22AE9859_2FA9_9F37_41C0_899DAEFB5DCF",
 {
  "id": "audio_3D4B750A_31B5_077A_41BD_EEC9C01ACF54",
  "class": "PanoramaAudio",
  "audio": {
   "mp3Url": "media/audio_3D4B750A_31B5_077A_41BD_EEC9C01ACF54.mp3",
   "class": "AudioResource",
   "oggUrl": "media/audio_3D4B750A_31B5_077A_41BD_EEC9C01ACF54.ogg"
  },
  "autoplay": true
 },
 "this.audio_3AE0123F_3529_4667_41A2_DC5683AF999E",
 "this.audio_2A8EE7CD_3779_CE2B_41C2_FD41A8D95E6D",
 "this.audio_2C1E2F15_3778_BE3B_41C9_360E0ED766A1",
 "this.audio_2C3504AE_3778_C269_41C9_08C99473BDE4",
 "this.audio_2C6B3544_377F_4219_41B2_643A31E1BBC6",
 "this.audio_2CE90177_377F_C2E7_41BC_156C59AB5D45",
 "this.audio_2CF89666_377F_4E19_41BE_012EC6107A1F"
], "children": [
 {
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "toolTipTextShadowBlurRadius": 3,
  "progressBarBorderRadius": 4,
  "progressBarBorderSize": 0,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "playbackBarHeadShadowHorizontalLength": 0,
  "transitionMode": "blending",
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadHeight": 30,
  "progressOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipTextShadowOpacity": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBorderRadius": 4,
  "toolTipPaddingRight": 6,
  "toolTipShadowOpacity": 1,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipFontStyle": "normal",
  "playbackBarBorderRadius": 4,
  "minHeight": 50,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBorderColor": "#000000",
  "progressBarBorderColor": "#000000",
  "paddingTop": 0,
  "minWidth": 100,
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadow": true,
  "toolTipBorderSize": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "progressLeft": 10,
  "progressBackgroundOpacity": 1,
  "toolTipFontColor": "#606060",
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 10,
  "toolTipPaddingTop": 4,
  "paddingBottom": 0,
  "progressBorderColor": "#AAAAAA",
  "toolTipFontWeight": "normal",
  "paddingRight": 0,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarOpacity": 1,
  "playbackBarBorderSize": 2,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "width": "100%",
  "toolTipOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBarOpacity": 1,
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowVerticalLength": 0,
  "shadow": false,
  "borderRadius": 0,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipShadowSpread": 0,
  "top": 59.05,
  "progressBottom": 1,
  "borderSize": 0,
  "paddingLeft": 0,
  "bottom": "6.32%",
  "playbackBarHeadWidth": 6,
  "toolTipFontFamily": "Arial",
  "playbackBarProgressBorderSize": 0,
  "progressHeight": 20,
  "id": "MainViewer",
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderColor": "#767676",
  "playbackBarHeight": 20,
  "playbackBarHeadBorderSize": 0,
  "playbackBarRight": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarBackgroundColorDirection": "vertical",
  "toolTipBackgroundColor": "#F6F6F6",
  "left": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressRight": 10,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipFontSize": 12,
  "toolTipBorderRadius": 3,
  "class": "ViewerArea",
  "playbackBarLeft": 0,
  "progressBorderSize": 2,
  "playbackBarHeadShadowBlurRadius": 3
 },
 {
  "itemPaddingTop": 3,
  "paddingBottom": 10,
  "class": "ThumbnailList",
  "itemLabelFontFamily": "Arial",
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#000000"
  ],
  "itemMode": "normal",
  "selectedItemLabelFontWeight": "bold",
  "itemThumbnailBorderRadius": 5,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemOpacity": 1,
  "itemLabelFontWeight": "normal",
  "width": 218,
  "gap": 10,
  "itemBackgroundColorDirection": "vertical",
  "verticalAlign": "top",
  "itemThumbnailShadowColor": "#000000",
  "shadow": false,
  "maxWidth": 800,
  "itemThumbnailHeight": 75,
  "itemLabelFontColor": "#FFFFFF",
  "borderRadius": 5,
  "itemBackgroundColor": [],
  "maxHeight": 800,
  "itemVerticalAlign": "middle",
  "itemThumbnailWidth": 100,
  "itemBorderRadius": 0,
  "itemLabelFontSize": 14,
  "itemBackgroundOpacity": 0,
  "backgroundColorRatios": [
   0
  ],
  "itemThumbnailShadowOpacity": 0.8,
  "scrollBarWidth": 10,
  "top": 169.85,
  "itemPaddingRight": 3,
  "itemThumbnailShadowVerticalLength": 3,
  "itemPaddingBottom": 3,
  "bottom": 188,
  "minHeight": 0,
  "borderSize": 0,
  "paddingLeft": 20,
  "itemPaddingLeft": 3,
  "itemThumbnailShadowBlurRadius": 4,
  "horizontalAlign": "left",
  "layout": "vertical",
  "itemBackgroundColorRatios": [],
  "itemLabelFontStyle": "normal",
  "id": "thumbnaillist5245",
  "scrollBarColor": "#FFFFFF",
  "backgroundOpacity": 0.2,
  "paddingTop": 10,
  "itemLabelTextDecoration": "none",
  "itemThumbnailShadowSpread": 1,
  "itemThumbnailOpacity": 1,
  "scrollBarMargin": 2,
  "itemLabelPosition": "bottom",
  "minWidth": 0,
  "itemLabelHorizontalAlign": "center",
  "itemThumbnailShadow": true,
  "scrollBarOpacity": 0.5,
  "scrollBarVisible": "rollOver",
  "itemHorizontalAlign": "center",
  "right": 18,
  "itemLabelGap": 5,
  "itemThumbnailScaleMode": "fit_outside",
  "playList": "this.thumbnaillist5245_playlist",
  "paddingRight": 20
 },
 {
  "paddingBottom": 0,
  "layout": "horizontal",
  "height": "5.914%",
  "gap": 10,
  "width": "71.931%",
  "shadow": false,
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "minHeight": 1,
  "borderSize": 0,
  "paddingLeft": 0,
  "bottom": "0.27%",
  "horizontalAlign": "center",
  "id": "Container_26C8D382_34BE_4E2F_41C3_DC9FACB461CA",
  "backgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "minWidth": 1,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.63,
  "contentOpaque": false,
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "overflow": "visible",
  "children": [
   {
    "paddingBottom": 0,
    "height": "100%",
    "gap": 10,
    "width": "33.33%",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "minHeight": 1,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "id": "Container_22A0ED9A_3528_C228_41C0_0DED6690D9FD",
    "borderSize": 0,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "scrollBarMargin": 2,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "verticalAlign": "middle",
    "layout": "horizontal",
    "class": "Container",
    "overflow": "visible",
    "children": [
     {
      "paddingBottom": 0,
      "height": 46.35,
      "mode": "push",
      "width": 171.6,
      "transparencyActive": false,
      "maxWidth": 2121,
      "shadow": false,
      "borderRadius": 0,
      "maxHeight": 565,
      "click": "this.openLink(\"https://www.linkedin.com/in/murali-karthick-8ab38a259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app\", \"_blank\")",
      "cursor": "hand",
      "minHeight": 1,
      "borderSize": 0,
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "id": "IconButton_2FAD31FB_36F9_45EF_41CA_2926FD123128",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "verticalAlign": "middle",
      "class": "IconButton",
      "iconURL": "skin/IconButton_2FAD31FB_36F9_45EF_41CA_2926FD123128.png",
      "paddingRight": 0
     }
    ],
    "paddingRight": 0
   },
   {
    "paddingBottom": 0,
    "height": "100%",
    "gap": 10,
    "width": "33.33%",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "minHeight": 1,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "id": "Container_2DEC6D08_3528_C229_41C2_AF23C6EC42DA",
    "borderSize": 0,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "scrollBarMargin": 2,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "verticalAlign": "middle",
    "layout": "horizontal",
    "class": "Container",
    "overflow": "visible",
    "children": [
     {
      "paddingBottom": 0,
      "height": 44,
      "mode": "push",
      "width": 338,
      "transparencyActive": false,
      "maxWidth": 1500,
      "shadow": false,
      "borderRadius": 0,
      "maxHeight": 400,
      "click": "this.openLink(\"https://www.linkedin.com/in/naveenkumar-r-5634882a3/\", \"_blank\")",
      "cursor": "hand",
      "minHeight": 1,
      "borderSize": 0,
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "id": "IconButton_2D4AA7FE_3539_4DE9_4196_C3F85A6C30BF",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "verticalAlign": "middle",
      "class": "IconButton",
      "iconURL": "skin/IconButton_2D4AA7FE_3539_4DE9_4196_C3F85A6C30BF.png",
      "paddingRight": 0
     }
    ],
    "paddingRight": 0
   },
   {
    "paddingBottom": 0,
    "height": "100%",
    "gap": 10,
    "width": "33.33%",
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "minHeight": 1,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "id": "Container_2DC546B7_3527_4E67_41C8_F107D64EC135",
    "borderSize": 0,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "scrollBarOpacity": 0.5,
    "minWidth": 1,
    "scrollBarMargin": 2,
    "paddingTop": 0,
    "scrollBarVisible": "rollOver",
    "verticalAlign": "middle",
    "layout": "horizontal",
    "class": "Container",
    "overflow": "visible",
    "children": [
     {
      "paddingBottom": 0,
      "height": 44,
      "mode": "push",
      "width": 381.8,
      "transparencyActive": false,
      "maxWidth": 1500,
      "shadow": false,
      "borderRadius": 0,
      "maxHeight": 400,
      "click": "this.openLink(\"https://www.linkedin.com/in/sukanth-r-24638a259\", \"_blank\")",
      "cursor": "hand",
      "minHeight": 1,
      "borderSize": 0,
      "paddingLeft": 0,
      "horizontalAlign": "center",
      "id": "IconButton_2D3F699F_353B_4227_41B9_05EC96B05F11",
      "backgroundOpacity": 0,
      "paddingTop": 0,
      "minWidth": 1,
      "verticalAlign": "middle",
      "class": "IconButton",
      "iconURL": "skin/IconButton_2D3F699F_353B_4227_41B9_05EC96B05F11.png",
      "paddingRight": 0
     }
    ],
    "paddingRight": 0
   }
  ],
  "left": "13.63%",
  "paddingRight": 0
 },
 {
  "paddingBottom": 0,
  "height": 75.2,
  "mode": "push",
  "width": 560.6,
  "transparencyActive": false,
  "maxWidth": 2990,
  "shadow": false,
  "borderRadius": 0,
  "maxHeight": 400,
  "top": "0.04%",
  "cursor": "hand",
  "minHeight": 1,
  "borderSize": 0,
  "paddingLeft": 0,
  "horizontalAlign": "center",
  "id": "IconButton_235CDA53_352B_463F_41B7_7AFF088EF130",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "minWidth": 1,
  "verticalAlign": "middle",
  "left": "0.48%",
  "class": "IconButton",
  "iconURL": "skin/IconButton_235CDA53_352B_463F_41B7_7AFF088EF130.png",
  "paddingRight": 0
 },
 {
  "paddingBottom": 0,
  "right": "39.09%",
  "height": "8.629%",
  "gap": 10,
  "width": "17.739%",
  "shadow": false,
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "minHeight": 1,
  "borderSize": 0,
  "paddingLeft": 0,
  "bottom": "3.36%",
  "horizontalAlign": "center",
  "id": "Container_2233AB09_352F_462B_41C7_7B42916F5502",
  "backgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "paddingTop": 0,
  "minWidth": 1,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false,
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "overflow": "visible",
  "children": [
   {
    "paddingBottom": 0,
    "height": 50.6,
    "mode": "push",
    "width": 226,
    "transparencyActive": false,
    "maxWidth": 790,
    "shadow": false,
    "borderRadius": 0,
    "maxHeight": 187,
    "cursor": "hand",
    "minHeight": 1,
    "borderSize": 0,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "id": "IconButton_22331C6F_3528_C2E7_41C6_6AE835BF2545",
    "backgroundOpacity": 0,
    "paddingTop": 0,
    "minWidth": 1,
    "verticalAlign": "middle",
    "class": "IconButton",
    "iconURL": "skin/IconButton_22331C6F_3528_C2E7_41C6_6AE835BF2545.png",
    "paddingRight": 0
   }
  ],
  "layout": "horizontal",
  "paddingRight": 0
 },
 {
  "paddingBottom": 0,
  "layout": "horizontal",
  "height": 137,
  "gap": 4,
  "shadow": false,
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "minHeight": 20,
  "borderSize": 0,
  "paddingLeft": 0,
  "bottom": "33.31%",
  "horizontalAlign": "center",
  "id": "Container_2ED42FE2_36E8_BE1E_41C2_176C9F6A8E2B",
  "backgroundOpacity": 0,
  "scrollBarColor": "#000000",
  "contentOpaque": false,
  "paddingTop": 0,
  "minWidth": 20,
  "scrollBarMargin": 2,
  "scrollBarOpacity": 0.5,
  "verticalAlign": "middle",
  "scrollBarVisible": "rollOver",
  "class": "Container",
  "overflow": "hidden",
  "children": [
   {
    "paddingBottom": 0,
    "height": "100%",
    "width": 40,
    "gap": 4,
    "shadow": false,
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "minHeight": 20,
    "paddingLeft": 0,
    "horizontalAlign": "center",
    "id": "Container_2ED4BFE2_36E8_BE19_41C4_F82F93183FE1",
    "borderSize": 0,
    "backgroundOpacity": 0,
    "scrollBarColor": "#000000",
    "contentOpaque": false,
    "scrollBarOpacity": 0.5,
    "minWidth": 20,
    "scrollBarMargin": 2,
    "paddingTop": 0,
    "verticalAlign": "middle",
    "scrollBarVisible": "rollOver",
    "class": "Container",
    "overflow": "hidden",
    "layout": "vertical",
    "paddingRight": 0
   }
  ],
  "left": "30.46%",
  "paddingRight": 0
 },
 {
  "paddingBottom": 0,
  "height": 37.1,
  "mode": "toggle",
  "width": 33.6,
  "transparencyActive": false,
  "shadow": false,
  "borderRadius": 0,
  "pressedIconURL": "skin/IconButton_2ED44FE2_36E8_BE19_41BB_41E05024BEB0_pressed.png",
  "cursor": "hand",
  "minHeight": 0,
  "borderSize": 0,
  "paddingLeft": 0,
  "bottom": "0.67%",
  "horizontalAlign": "center",
  "id": "IconButton_2ED44FE2_36E8_BE19_41BB_41E05024BEB0",
  "backgroundOpacity": 0,
  "paddingTop": 0,
  "minWidth": 0,
  "verticalAlign": "middle",
  "class": "IconButton",
  "iconURL": "skin/IconButton_2ED44FE2_36E8_BE19_41BB_41E05024BEB0.png",
  "left": "2.7%",
  "paddingRight": 0
 }
], 
 "start": "this.syncPlaylists([this.thumbnaillist5245_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "backgroundPreloadEnabled": true,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "buttonToggleMute": "this.IconButton_2ED44FE2_36E8_BE19_41BB_41E05024BEB0",
 "height": "100%",
 "gap": 10,
 "width": "100%",
 "shadow": false,
 "borderRadius": 0,
 "scrollBarWidth": 10,
 "minHeight": 20,
 "borderSize": 0,
 "paddingLeft": 0,
 "horizontalAlign": "left",
 "id": "rootPlayer",
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "unregisterKey": function(key){  delete window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('visible', true); htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('visible', false); htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "getKey": function(key){  return window[key]; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); }; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "startPanoramaWithCamera": function(panorama, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == panorama && item.get('class') == 'PanoramaPlayListItem'){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); } restoreItems[0].item.unbind('stop', restoreCameraOnStop, this); }; restoreItems[0].item.bind('stop', restoreCameraOnStop, this); } },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('text') == '' || component.get('text') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } }
 },
 "scrollBarColor": "#000000",
 "paddingTop": 0,
 "vrPolyfillScale": 0.5,
 "minWidth": 20,
 "scrollBarMargin": 2,
 "scrollBarOpacity": 0.5,
 "contentOpaque": false,
 "verticalAlign": "top",
 "scrollBarVisible": "rollOver",
 "class": "Player",
 "overflow": "visible",
 "layout": "absolute",
 "paddingRight": 0
})