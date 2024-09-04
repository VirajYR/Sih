// const dangerZonesData=[
//     {
//       "id": 1,
//       "center": [28.4595, 77.0266],
//       "radius": 1500,
//       "startTime": "18:00",
//       "endTime": "02:00",
//       "activeMonths": [1, 2, 3, 10, 11, 12],
//       "zoneName": "Sector 29 Market"
//     },
//     {
//       "id": 2,
//       "center": [28.4679, 77.0512],
//       "radius": 1200,
//       "startTime": "19:00",
//       "endTime": "04:00",
//       "activeMonths": [1, 2, 6, 7, 8, 12],
//       "zoneName": "Cyber City"
//     },
//     {
//       "id": 3,
//       "center": [28.4793, 77.0735],
//       "radius": 1000,
//       "startTime": "20:00",
//       "endTime": "03:00",
//       "activeMonths": [1, 5, 6, 7, 11, 12],
//       "zoneName": "MG Road Metro Station"
//     },
//     {
//       "id": 4,
//       "center": [28.4212, 77.0632],
//       "radius": 800,
//       "startTime": "17:00",
//       "endTime": "23:00",
//       "activeMonths": [3, 4, 5, 10, 11, 12],
//       "zoneName": "Sohna Road"
//     },
//     {
//       "id": 5,
//       "center": [28.4599, 77.0586],
//       "radius": 1300,
//       "startTime": "19:00",
//       "endTime": "01:00",
//       "activeMonths": [2, 3, 6, 7, 8, 12],
//       "zoneName": "Huda City Center"
//     },
//     {
//       "id": 6,
//       "center": [28.4696, 77.0694],
//       "radius": 1100,
//       "startTime": "21:00",
//       "endTime": "03:00",
//       "activeMonths": [1, 2, 6, 7, 8, 12],
//       "zoneName": "DLF Phase 3"
//     },
//     {
//       "id": 7,
//       "center": [28.4545, 77.0508],
//       "radius": 1400,
//       "startTime": "18:00",
//       "endTime": "00:00",
//       "activeMonths": [3, 4, 5, 10, 11, 12],
//       "zoneName": "Sector 14"
//     },
//     {
//       "id": 8,
//       "center": [28.4527, 77.0534],
//       "radius": 900,
//       "startTime": "20:00",
//       "endTime": "04:00",
//       "activeMonths": [2, 3, 6, 7, 8, 11],
//       "zoneName": "IFFCO Chowk"
//     },
//     {
//       "id": 9,
//       "center": [28.4825, 77.0575],
//       "radius": 1000,
//       "startTime": "19:00",
//       "endTime": "03:00",
//       "activeMonths": [1, 2, 3, 7, 8, 11],
//       "zoneName": "Udyog Vihar"
//     },
//     {
//       "id": 10,
//       "center": [28.4695, 77.0914],
//       "radius": 1200,
//       "startTime": "18:00",
//       "endTime": "02:00",
//       "activeMonths": [3, 4, 5, 6, 10, 12],
//       "zoneName": "Sushant Lok"
//     }
//   ]
  
//   export default dangerZonesData;


const dangerZonesData = [
    {
      id: 1,
      zoneName: "MG Road Metro Station",
      center: [28.479799, 77.072626],
      radius: 500, // radius in meters
      startTime: "00:00", // Start time (24-hour format)
      endTime: "23:59", // End time (24-hour format)
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], // All months
    },
    {
      id: 2,
      zoneName: "IFFCO Chowk",
      center: [28.469348, 77.067522],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 3,
      zoneName: "Sikanderpur Metro Station",
      center: [28.481615, 77.084981],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 4,
      zoneName: "Huda City Centre",
      center: [28.459497, 77.072663],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 5,
      zoneName: "Cyber City",
      center: [28.494610, 77.088108],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 6,
      zoneName: "Gurgaon Railway Station",
      center: [28.456257, 77.028959],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 7,
      zoneName: "Sector 29 Market",
      center: [28.466114, 77.068343],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 8,
      zoneName: "Sohna Road",
      center: [28.411055, 77.046203],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 9,
      zoneName: "DLF Phase 3",
      center: [28.495295, 77.090155],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 10,
      zoneName: "Sector 44",
      center: [28.459502, 77.073122],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    },
    {
      id: 10,
      zoneName: "New Delhi",
      center: [28.611149, 77.204926],
      radius: 500,
      startTime: "00:00",
      endTime: "23:59",
      activeMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      
    }
  ];
  
  export default dangerZonesData;
  