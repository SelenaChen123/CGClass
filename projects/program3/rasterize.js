// constants
const WIN_Z = 0;  // default graphics window z coord in world space
const WIN_LEFT = 0; const WIN_RIGHT = 1;  // default left and right x coords in world space
const WIN_BOTTOM = 0; const WIN_TOP = 1;  // default top and bottom y coords in world space
const INPUT_TRIANGLES_URL = "https://ncsucgclass.github.io/prog3/triangles.json"; // triangles file loc
const INPUT_ELLIPSOIDS_URL = "https://ncsucgclass.github.io/prog3/ellipsoids.json"; // ellipsoids file loc
const INPUT_SPHERE_STRING = `
    {
        "vertices" : [[0.000000, -5.000000, 0.000000], [3.618037, -2.236098, 2.628626], [-1.381940, -2.236099, 4.253246], [-4.472131, -2.236078, 0.000000], [-1.381940, -2.236099, -4.253246], [3.618037, -2.236098, -2.628626], [1.381940, 2.236099, 4.253246], [-3.618037, 2.236098, 2.628626], [-3.618037, 2.236098, -2.628626], [1.381940, 2.236099, -4.253246], [4.472131, 2.236078, 0.000000], [0.000000, 5.000000, 0.000000], [-1.164107, -3.287596, 3.582815], [-0.812278, -4.253273, 2.499976], [-0.388033, -4.839749, 1.194263], [1.015905, -4.839748, 0.738089], [2.126614, -4.253271, 1.545057], [3.047734, -3.287595, 2.214282], [2.659704, -2.511508, 3.408562], [1.314344, -2.628689, 4.045058], [-0.148196, -2.511510, 4.320921], [4.063646, -2.511503, -1.476188], [4.253239, -2.628680, 0.000000], [4.063646, -2.511503, 1.476188], [1.015905, -4.839748, -0.738089], [2.126614, -4.253271, -1.545057], [3.047734, -3.287595, -2.214282], [-3.767208, -3.287574, 0.000000], [-2.628649, -4.253258, 0.000000], [-1.255735, -4.839745, 0.000000], [-2.419857, -2.511508, 3.582823], [-3.440947, -2.628681, 2.499984], [-4.155253, -2.511493, 1.194267], [-1.164107, -3.287596, -3.582815], [-0.812278, -4.253273, -2.499976], [-0.388033, -4.839749, -1.194263], [-4.155253, -2.511493, -1.194267], [-3.440946, -2.628681, -2.499985], [-2.419857, -2.511508, -3.582823], [-0.148196, -2.511510, -4.320921], [1.314344, -2.628689, -4.045058], [2.659704, -2.511508, -3.408562], [4.783129, 1.255747, 0.738092], [4.755289, 0.000000, 1.545063], [4.303488, -1.255754, 2.214288], [4.303488, -1.255754, -2.214288], [4.755289, 0.000000, -1.545063], [4.783129, 1.255747, -0.738092], [0.776075, 1.255758, 4.777110], [0.000000, 0.000000, 5.000000], [-0.776075, -1.255758, 4.777110], [3.435793, -1.255760, 3.408576], [2.938928, 0.000000, 4.045084], [2.180034, 1.255760, 4.320940], [-4.303488, 1.255754, 2.214288], [-4.755289, 0.000000, 1.545063], [-4.783129, -1.255747, 0.738092], [-2.180034, -1.255760, 4.320940], [-2.938928, 0.000000, 4.045084], [-3.435793, 1.255760, 3.408576], [-3.435793, 1.255760, -3.408576], [-2.938928, 0.000000, -4.045084], [-2.180034, -1.255760, -4.320940], [-4.783129, -1.255747, -0.738092], [-4.755289, 0.000000, -1.545063], [-4.303488, 1.255754, -2.214288], [2.180034, 1.255760, -4.320940], [2.938928, 0.000000, -4.045084], [3.435793, -1.255760, -3.408576], [-0.776075, -1.255758, -4.777110], [0.000000, 0.000000, -5.000000], [0.776075, 1.255758, -4.777110], [4.155253, 2.511493, 1.194267], [3.440946, 2.628681, 2.499985], [2.419857, 2.511508, 3.582823], [0.148196, 2.511510, 4.320921], [-1.314344, 2.628689, 4.045058], [-2.659704, 2.511508, 3.408562], [-4.063646, 2.511503, 1.476188], [-4.253239, 2.628680, 0.000000], [-4.063646, 2.511503, -1.476188], [-2.659704, 2.511508, -3.408562], [-1.314344, 2.628689, -4.045058], [0.148196, 2.511510, -4.320921], [2.419857, 2.511508, -3.582823], [3.440947, 2.628681, -2.499984], [4.155253, 2.511493, -1.194267], [0.388033, 4.839748, 1.194264], [0.812278, 4.253272, 2.499976], [1.164107, 3.287596, 3.582815], [3.767208, 3.287574, 0.000000], [2.628649, 4.253258, 0.000000], [1.255735, 4.839745, 0.000000], [-1.015905, 4.839748, 0.738089], [-2.126614, 4.253271, 1.545057], [-3.047734, 3.287595, 2.214282], [-1.015905, 4.839748, -0.738089], [-2.126614, 4.253271, -1.545057], [-3.047734, 3.287595, -2.214282], [0.388033, 4.839748, -1.194264], [0.812278, 4.253272, -2.499976], [1.164107, 3.287596, -3.582815], [1.809001, 4.472146, -1.314315], [3.190968, 3.618051, -1.314321], [2.236046, 3.618058, -2.628641], [-0.690987, 4.472150, -2.126598], [-0.263948, 3.618062, -3.440924], [-1.809018, 3.618061, -2.938892], [-2.236049, 4.472145, 0.000000], [-3.354083, 3.618054, -0.812285], [-3.354083, 3.618054, 0.812285], [-0.690987, 4.472150, 2.126598], [-1.809018, 3.618061, 2.938892], [-0.263948, 3.618062, 3.440924], [1.809001, 4.472146, 1.314315], [2.236046, 3.618058, 2.628641], [3.190968, 3.618050, 1.314320], [4.309021, 1.381981, -2.126609], [4.045096, 0.000000, -2.938911], [3.354103, 1.381987, -3.440945], [-0.690992, 1.381985, -4.755275], [-1.545082, -0.000002, -4.755283], [-2.236075, 1.381986, -4.253243], [-4.736066, 1.381979, -0.812288], [-5.000000, 0.000003, 0.000002], [-4.736065, 1.381983, 0.812289], [-2.236079, 1.381984, 4.253242], [-1.545086, -0.000004, 4.755283], [-0.690996, 1.381984, 4.755276], [3.354101, 1.381981, 3.440949], [4.045093, -0.000010, 2.938915], [4.309021, 1.381972, 2.126616], [1.545086, 0.000000, -4.755282], [2.236078, -1.381989, -4.253242], [0.690996, -1.381988, -4.755275], [-4.045093, 0.000000, -2.938916], [-3.354095, -1.381986, -3.440953], [-4.309015, -1.381981, -2.126620], [-4.045093, 0.000000, 2.938916], [-4.309015, -1.381981, 2.126620], [-3.354095, -1.381986, 3.440953], [1.545086, 0.000000, 4.755282], [0.690996, -1.381988, 4.755275], [2.236078, -1.381989, 4.253242], [5.000000, 0.000000, 0.000000], [4.736066, -1.381980, 0.812288], [4.736066, -1.381980, -0.812288], [1.809018, -3.618058, -2.938895], [0.690984, -4.472145, -2.126606], [0.263946, -3.618055, -3.440932], [-2.236053, -3.618058, -2.628635], [-1.809006, -4.472145, -1.314313], [-3.190974, -3.618047, -1.314314], [-3.190973, -3.618047, 1.314318], [-1.809006, -4.472142, 1.314322], [-2.236053, -3.618052, 2.628643], [3.354085, -3.618053, -0.812284], [3.354087, -3.618050, 0.812289], [2.236055, -4.472142, 0.000004], [0.263952, -3.618059, 3.440927], [0.690993, -4.472146, 2.126603], [1.809025, -3.618055, 2.938895]],
        "normals" : [[0.000000, -1.000000, 0.000000], [0.210900, -0.965400, 0.153300], [-0.080600, -0.965400, 0.248000], [0.723600, -0.447200, 0.525700], [0.604200, -0.665000, 0.439000], [0.815200, -0.503800, 0.285700], [-0.260800, -0.965400, 0.000000], [-0.080600, -0.965400, -0.248000], [0.210900, -0.965400, -0.153300], [0.865000, -0.243000, 0.439000], [-0.276400, -0.447200, 0.850600], [-0.019800, -0.503800, 0.863600], [-0.150200, -0.243000, 0.958300], [-0.894400, -0.447200, 0.000000], [-0.827400, -0.503800, 0.248000], [-0.957800, -0.243000, 0.153300], [-0.276400, -0.447200, -0.850600], [-0.491500, -0.503800, -0.710300], [-0.441700, -0.243000, -0.863600], [0.723600, -0.447200, -0.525700], [0.523600, -0.503800, -0.687000], [0.684800, -0.243000, -0.687000], [0.684800, -0.243000, 0.687000], [-0.441700, -0.243000, 0.863600], [-0.957800, -0.243000, -0.153300], [-0.150200, -0.243000, -0.958300], [0.865000, -0.243000, -0.439000], [0.276400, 0.447200, 0.850600], [0.491500, 0.503800, 0.710300], [0.230800, 0.665000, 0.710300], [-0.723600, 0.447200, 0.525700], [-0.523600, 0.503800, 0.687000], [-0.604200, 0.665000, 0.439000], [-0.723600, 0.447200, -0.525700], [-0.815200, 0.503800, -0.285700], [-0.604200, 0.665000, -0.439000], [0.276400, 0.447200, -0.850600], [0.019800, 0.503800, -0.863600], [0.230800, 0.665000, -0.710300], [0.894400, 0.447200, 0.000000], [0.827400, 0.503800, -0.248000], [0.746800, 0.665000, 0.000000], [0.260800, 0.965400, 0.000000], [0.080600, 0.965400, -0.248000], [0.000000, 1.000000, 0.000000], [0.525700, 0.850600, 0.000000], [0.368200, 0.890400, -0.267500], [0.631700, 0.727500, -0.267500], [0.162500, 0.850600, -0.500000], [0.449600, 0.727500, -0.518100], [0.688200, 0.525700, -0.500000], [0.491500, 0.503800, -0.710300], [-0.210900, 0.965400, -0.153200], [-0.140600, 0.890400, -0.432800], [-0.059200, 0.727500, -0.683500], [-0.425300, 0.850600, -0.309000], [-0.353800, 0.727500, -0.587700], [-0.262900, 0.525700, -0.809000], [-0.523600, 0.503800, -0.687000], [-0.210900, 0.965400, 0.153200], [-0.455100, 0.890400, 0.000000], [-0.668300, 0.727500, -0.154900], [-0.425300, 0.850600, 0.309000], [-0.668300, 0.727500, 0.154900], [-0.850600, 0.525700, 0.000000], [-0.815200, 0.503800, 0.285700], [0.080600, 0.965400, 0.248000], [-0.140600, 0.890400, 0.432800], [-0.353800, 0.727500, 0.587700], [0.162500, 0.850600, 0.500000], [-0.059200, 0.727500, 0.683500], [-0.262900, 0.525700, 0.809000], [0.019800, 0.503800, 0.863600], [0.368200, 0.890400, 0.267500], [0.449600, 0.727500, 0.518100], [0.631700, 0.727500, 0.267500], [0.688200, 0.525700, 0.500000], [0.827400, 0.503800, 0.248000], [0.957800, 0.243000, -0.153300], [0.951000, 0.000000, -0.309000], [0.859300, 0.272400, -0.432800], [0.809000, 0.008900, -0.587800], [0.677200, 0.272400, -0.683500], [0.587800, 0.000000, -0.809000], [0.441700, 0.243000, -0.863600], [0.150200, 0.243000, -0.958300], [0.000000, 0.000000, -1.000000], [-0.146100, 0.272400, -0.951000], [-0.309000, 0.008900, -0.951000], [-0.440700, 0.272400, -0.855300], [-0.587800, 0.000000, -0.809000], [-0.684800, 0.243000, -0.687000], [-0.865000, 0.243000, -0.439000], [-0.951000, 0.000000, -0.309000], [-0.949600, 0.272400, -0.154900], [-0.999900, 0.008900, 0.000000], [-0.949600, 0.272400, 0.154900], [-0.951000, 0.000000, 0.309000], [-0.865000, 0.243000, 0.439000], [-0.684800, 0.243000, 0.687000], [-0.587800, 0.000000, 0.809000], [-0.440700, 0.272400, 0.855300], [-0.309000, 0.008900, 0.951000], [-0.146100, 0.272400, 0.951000], [0.000000, 0.000000, 1.000000], [0.150200, 0.243000, 0.958300], [0.441700, 0.243000, 0.863600], [0.587800, 0.000000, 0.809000], [0.677200, 0.272400, 0.683500], [0.809000, 0.008900, 0.587800], [0.859300, 0.272400, 0.432800], [0.951000, 0.000000, 0.309000], [0.957800, 0.243000, 0.153300], [0.309000, -0.008900, -0.951000], [0.440700, -0.272400, -0.855300], [0.146100, -0.272400, -0.951000], [0.262900, -0.525700, -0.809000], [-0.019800, -0.503800, -0.863600], [-0.809000, -0.008900, -0.587800], [-0.677200, -0.272400, -0.683500], [-0.859300, -0.272400, -0.432800], [-0.688200, -0.525700, -0.500000], [-0.827400, -0.503800, -0.248000], [-0.809000, -0.008900, 0.587800], [-0.859300, -0.272400, 0.432800], [-0.677200, -0.272400, 0.683500], [-0.688200, -0.525700, 0.500000], [-0.491500, -0.503800, 0.710300], [0.309000, -0.008900, 0.951000], [0.146100, -0.272400, 0.951000], [0.440700, -0.272400, 0.855300], [0.262900, -0.525700, 0.809000], [0.523600, -0.503800, 0.687000], [0.999900, -0.008900, 0.000000], [0.949600, -0.272400, 0.154900], [0.949600, -0.272400, -0.154900], [0.850600, -0.525700, 0.000000], [0.815200, -0.503800, -0.285700], [0.604200, -0.665000, -0.439000], [0.425300, -0.850600, -0.309000], [0.353800, -0.727500, -0.587800], [0.140600, -0.890400, -0.432800], [0.059200, -0.727500, -0.683500], [-0.162500, -0.850600, -0.500000], [-0.230800, -0.665000, -0.710300], [-0.449600, -0.727500, -0.518100], [-0.368200, -0.890400, -0.267500], [-0.631700, -0.727500, -0.267500], [-0.525700, -0.850600, 0.000000], [-0.746800, -0.665000, 0.000000], [-0.631700, -0.727500, 0.267500], [-0.368200, -0.890400, 0.267500], [-0.449600, -0.727500, 0.518100], [-0.162500, -0.850600, 0.500000], [-0.230800, -0.665000, 0.710300], [0.668300, -0.727500, -0.154900], [0.668300, -0.727500, 0.154900], [0.455100, -0.890400, 0.000000], [0.425300, -0.850600, 0.309000], [0.059200, -0.727500, 0.683500], [0.140600, -0.890400, 0.432800], [0.353800, -0.727500, 0.587800]],
        "triangles" : [[1, 16, 15], [2, 18, 24], [1, 15, 30], [1, 30, 36], [1, 36, 25], [2, 24, 45], [3, 21, 51], [4, 33, 57], [5, 39, 63], [6, 42, 69], [2, 45, 52], [3, 51, 58], [4, 57, 64], [5, 63, 70], [6, 69, 46], [7, 75, 90], [8, 78, 96], [9, 81, 99], [10, 84, 102], [11, 87, 91], [93, 100, 12], [92, 103, 93], [91, 104, 92], [93, 103, 100], [103, 101, 100], [92, 104, 103], [104, 105, 103], [103, 105, 101], [105, 102, 101], [91, 87, 104], [87, 86, 104], [104, 86, 105], [86, 85, 105], [105, 85, 102], [85, 10, 102], [100, 97, 12], [101, 106, 100], [102, 107, 101], [100, 106, 97], [106, 98, 97], [101, 107, 106], [107, 108, 106], [106, 108, 98], [108, 99, 98], [102, 84, 107], [84, 83, 107], [107, 83, 108], [83, 82, 108], [108, 82, 99], [82, 9, 99], [97, 94, 12], [98, 109, 97], [99, 110, 98], [97, 109, 94], [109, 95, 94], [98, 110, 109], [110, 111, 109], [109, 111, 95], [111, 96, 95], [99, 81, 110], [81, 80, 110], [110, 80, 111], [80, 79, 111], [111, 79, 96], [79, 8, 96], [94, 88, 12], [95, 112, 94], [96, 113, 95], [94, 112, 88], [112, 89, 88], [95, 113, 112], [113, 114, 112], [112, 114, 89], [114, 90, 89], [96, 78, 113], [78, 77, 113], [113, 77, 114], [77, 76, 114], [114, 76, 90], [76, 7, 90], [88, 93, 12], [89, 115, 88], [90, 116, 89], [88, 115, 93], [115, 92, 93], [89, 116, 115], [116, 117, 115], [115, 117, 92], [117, 91, 92], [90, 75, 116], [75, 74, 116], [116, 74, 117], [74, 73, 117], [117, 73, 91], [73, 11, 91], [48, 87, 11], [47, 118, 48], [46, 119, 47], [48, 118, 87], [118, 86, 87], [47, 119, 118], [119, 120, 118], [118, 120, 86], [120, 85, 86], [46, 69, 119], [69, 68, 119], [119, 68, 120], [68, 67, 120], [120, 67, 85], [67, 10, 85], [72, 84, 10], [71, 121, 72], [70, 122, 71], [72, 121, 84], [121, 83, 84], [71, 122, 121], [122, 123, 121], [121, 123, 83], [123, 82, 83], [70, 63, 122], [63, 62, 122], [122, 62, 123], [62, 61, 123], [123, 61, 82], [61, 9, 82], [66, 81, 9], [65, 124, 66], [64, 125, 65], [66, 124, 81], [124, 80, 81], [65, 125, 124], [125, 126, 124], [124, 126, 80], [126, 79, 80], [64, 57, 125], [57, 56, 125], [125, 56, 126], [56, 55, 126], [126, 55, 79], [55, 8, 79], [60, 78, 8], [59, 127, 60], [58, 128, 59], [60, 127, 78], [127, 77, 78], [59, 128, 127], [128, 129, 127], [127, 129, 77], [129, 76, 77], [58, 51, 128], [51, 50, 128], [128, 50, 129], [50, 49, 129], [129, 49, 76], [49, 7, 76], [54, 75, 7], [53, 130, 54], [52, 131, 53], [54, 130, 75], [130, 74, 75], [53, 131, 130], [131, 132, 130], [130, 132, 74], [132, 73, 74], [52, 45, 131], [45, 44, 131], [131, 44, 132], [44, 43, 132], [132, 43, 73], [43, 11, 73], [67, 72, 10], [68, 133, 67], [69, 134, 68], [67, 133, 72], [133, 71, 72], [68, 134, 133], [134, 135, 133], [133, 135, 71], [135, 70, 71], [69, 42, 134], [42, 41, 134], [134, 41, 135], [41, 40, 135], [135, 40, 70], [40, 5, 70], [61, 66, 9], [62, 136, 61], [63, 137, 62], [61, 136, 66], [136, 65, 66], [62, 137, 136], [137, 138, 136], [136, 138, 65], [138, 64, 65], [63, 39, 137], [39, 38, 137], [137, 38, 138], [38, 37, 138], [138, 37, 64], [37, 4, 64], [55, 60, 8], [56, 139, 55], [57, 140, 56], [55, 139, 60], [139, 59, 60], [56, 140, 139], [140, 141, 139], [139, 141, 59], [141, 58, 59], [57, 33, 140], [33, 32, 140], [140, 32, 141], [32, 31, 141], [141, 31, 58], [31, 3, 58], [49, 54, 7], [50, 142, 49], [51, 143, 50], [49, 142, 54], [142, 53, 54], [50, 143, 142], [143, 144, 142], [142, 144, 53], [144, 52, 53], [51, 21, 143], [21, 20, 143], [143, 20, 144], [20, 19, 144], [144, 19, 52], [19, 2, 52], [43, 48, 11], [44, 145, 43], [45, 146, 44], [43, 145, 48], [145, 47, 48], [44, 146, 145], [146, 147, 145], [145, 147, 47], [147, 46, 47], [45, 24, 146], [24, 23, 146], [146, 23, 147], [23, 22, 147], [147, 22, 46], [22, 6, 46], [27, 42, 6], [26, 148, 27], [25, 149, 26], [27, 148, 42], [148, 41, 42], [26, 149, 148], [149, 150, 148], [148, 150, 41], [150, 40, 41], [25, 36, 149], [36, 35, 149], [149, 35, 150], [35, 34, 150], [150, 34, 40], [34, 5, 40], [34, 39, 5], [35, 151, 34], [36, 152, 35], [34, 151, 39], [151, 38, 39], [35, 152, 151], [152, 153, 151], [151, 153, 38], [153, 37, 38], [36, 30, 152], [30, 29, 152], [152, 29, 153], [29, 28, 153], [153, 28, 37], [28, 4, 37], [28, 33, 4], [29, 154, 28], [30, 155, 29], [28, 154, 33], [154, 32, 33], [29, 155, 154], [155, 156, 154], [154, 156, 32], [156, 31, 32], [30, 15, 155], [15, 14, 155], [155, 14, 156], [14, 13, 156], [156, 13, 31], [13, 3, 31], [22, 27, 6], [23, 157, 22], [24, 158, 23], [22, 157, 27], [157, 26, 27], [23, 158, 157], [158, 159, 157], [157, 159, 26], [159, 25, 26], [24, 18, 158], [18, 17, 158], [158, 17, 159], [17, 16, 159], [159, 16, 25], [16, 1, 25], [13, 21, 3], [14, 160, 13], [15, 161, 14], [13, 160, 21], [160, 20, 21], [14, 161, 160], [161, 162, 160], [160, 162, 20], [162, 19, 20], [15, 16, 161], [16, 17, 161], [161, 17, 162], [17, 18, 162], [162, 18, 19], [18, 2, 19]]
    }
    `; // sphere model

// globals
var gl = null;
var bgColor = 0;

var vertexTriangleBuffer;
var triTriangleBufferSize = 0;
var pinkTriangleTriangleBuffer;
var yellowTriangleTriangleBuffer;
var ambientColorTriangleBuffer;
var diffuseColorTriangleBuffer;
var specularColorTriangleBuffer;
var specularExponentTriangleBuffer;
var normalTriangleBuffer;

var vertexPositionTriangleAttrib;
var vertexColorTriangleAttrib;

var inputEllipsoids;

var vertexSphereBuffer;
var triSphereBufferSize = 0;
var blueTriangleSphereBuffer;
var pinkTriangleSphereBuffer;
var yellowTriangleSphereBuffer;
var ambientColorSphereBuffer;
var diffuseColorSphereBuffer;
var specularColorSphereBuffer;
var specularExponentSphereBuffer;
var normalSphereBuffer;

var vertexPositionSphereAttrib;
var vertexColorSphereAttrib;

var aVertexPosition;
var aNormalPosition;
var aAmbientColor;
var aDiffuseColor;
var aSpecularColor;
var aSpecularExponent;

var uScale;
var uModel;
var uView;
var uProjection;
var uEyePosition;

var eyeVector = vec3.fromValues(0.5,0.5,-0.5);
var atVector = vec3.fromValues(0, 0, 1);
var upVector = vec3.fromValues(0, 1, 0);
var translationVector = vec3.fromValues(0, 0, 0);
var scaleVector = vec3.fromValues(1, 1, 1);

var translationMatrix = mat4.create();
var scaleMatrix = mat4.create();
var modelMatrix = mat4.create();
var viewMatrix = mat4.create();
var projectionMatrix = mat4.create();

function keypressHandler(event) {
    if(event.key == "a") {
        vec3.add(eyeVector, eyeVector, vec3.scale(vec3.create(), vec3.cross(vec3.create(), upVector, atVector), 0.1));
    }
    else if(event.key == "d") {
        vec3.add(eyeVector, eyeVector, vec3.scale(vec3.create(), vec3.negate(vec3.create(), vec3.cross(vec3.create(), upVector, atVector)), 0.1));
    }

    if(event.key == "w") {
        vec3.add(eyeVector, eyeVector, vec3.scale(vec3.create(), atVector, 0.1));
    }
    else if(event.key == "s") {
        vec3.add(eyeVector, eyeVector, vec3.scale(vec3.create(), vec3.negate(vec3.create(), atVector), 0.1));
    }

    if(event.key == "q") {
        vec3.add(eyeVector, eyeVector, vec3.scale(vec3.create(), upVector, 0.1));
    }
    else if(event.key == "e") {
        vec3.add(eyeVector, eyeVector, vec3.scale(vec3.create(), vec3.negate(vec3.create(), upVector), 0.1));
    }

    if(event.key == "A") {
        var rotationMatrix = mat4.create();
        mat4.fromRotation(rotationMatrix, Math.PI/64, upVector);
        vec3.transformMat4(upVector, upVector, rotationMatrix);
        vec3.transformMat4(atVector, atVector, rotationMatrix);
    }
    else if(event.key == "D") {
        var rotationMatrix = mat4.create();
        mat4.fromRotation(rotationMatrix, -Math.PI/64, upVector);
        vec3.transformMat4(upVector, upVector, rotationMatrix);
        vec3.transformMat4(atVector, atVector, rotationMatrix);
    }

    if(event.key == "W") {
        var rotationMatrix = mat4.create();
        mat4.fromRotation(rotationMatrix, Math.PI/64, vec3.cross(vec3.create(), upVector, atVector));
        vec3.transformMat4(upVector, upVector, rotationMatrix);
        vec3.transformMat4(atVector, atVector, rotationMatrix);
    }
    else if(event.key == "S") {
        var rotationMatrix = mat4.create();
        mat4.fromRotation(rotationMatrix, -Math.PI/64, vec3.cross(vec3.create(), upVector, atVector));
        vec3.transformMat4(upVector, upVector, rotationMatrix);
        vec3.transformMat4(atVector, atVector, rotationMatrix);
    }

    renderTriangles();
    renderEllipsoids();
}

// get the JSON file from the passed URL
function getJSONFile(url,descr) {
    try {
        if ((typeof(url) !== "string") || (typeof(descr) !== "string"))
            throw "getJSONFile: parameter not a string";
        else {
            var httpReq = new XMLHttpRequest(); // a new http request
            httpReq.open("GET",url,false); // init the request
            httpReq.send(null); // send the request
            var startTime = Date.now();
            while ((httpReq.status !== 200) && (httpReq.readyState !== XMLHttpRequest.DONE)) {
                if ((Date.now()-startTime) > 3000)
                    break;
            } // until its loaded or we time out after three seconds
            if ((httpReq.status !== 200) || (httpReq.readyState !== XMLHttpRequest.DONE))
                throw "Unable to open "+descr+" file!";
            else
                return JSON.parse(httpReq.response); 
        } // end if good params
    } // end try    
    
    catch(e) {
        console.log(e);
        return(String.null);
    }
} // end get JSON file

// set up the webGL environment
function setupWebGL() {
    // Get the canvas and context
    var canvas = document.getElementById("myWebGLCanvas"); // create a js canvas
    gl = canvas.getContext("webgl"); // get a webgl object from it
    
    try {
      if (gl == null) {
        throw "unable to create gl context -- is your browser gl ready?";
      } else {
        gl.clearColor(0.0, 0.0, 0.0, 1.0); // use black when we clear the frame buffer
        gl.clearDepth(1.0); // use max when we clear the depth buffer
        gl.enable(gl.DEPTH_TEST); // use hidden surface removal (with zbuffering)
      }
    } // end try
    
    catch(e) {
      console.log(e);
    } // end catch
} // end setupWebGL

function setupShaders() {
    // define fragment shader in essl using es6 template strings
    var fShaderCode = `
        precision mediump float;
        uniform vec3 uEyePosition;
        varying vec3 vVertexPosition;
        varying vec3 vNormalPosition;
        varying vec3 vAmbientColor;
        varying vec3 vDiffuseColor;
        varying vec3 vSpecularColor;
        varying float vSpecularExponent;
        
        void main() {
            vec3 lightPosition = normalize(vec3(-0.5,1.5,-0.5) - vVertexPosition);
            vec3 eyePosition = normalize(uEyePosition - vVertexPosition);
            vec3 halfPosition = normalize(eyePosition + lightPosition);
            vec3 normalPosition = normalize(vNormalPosition);
            float diffuseValue = max(dot(normalPosition, lightPosition),0.0);
            float specularValue = pow(max(dot(normalPosition, halfPosition),0.0),vSpecularExponent);
            gl_FragColor = vec4((vAmbientColor + vDiffuseColor * diffuseValue + vSpecularColor * specularValue), 1.0);
        }
    `;
    
    // define vertex shader in essl using es6 template strings
    var vShaderCode = `
        uniform mat4 uScale;
        uniform mat4 uModel;
        uniform mat4 uView;
        uniform mat4 uProjection;
        attribute vec3 aVertexPosition;
        attribute vec3 aNormalPosition;
        attribute vec3 aAmbientColor;
        attribute vec3 aDiffuseColor;
        attribute vec3 aSpecularColor;
        attribute float aSpecularExponent;
        varying vec3 vVertexPosition;
        varying vec3 vNormalPosition;
        varying vec3 vAmbientColor;
        varying vec3 vDiffuseColor;
        varying vec3 vSpecularColor;
        varying float vSpecularExponent;

        void main() {
            vec4 vertexPosition = vec4(aVertexPosition,1.0);
            vec4 vertex = uModel * vertexPosition;
            gl_Position = uProjection * uView * vertex;
            vVertexPosition = vertex.xyz;
            vec4 normalPosition = vec4(aNormalPosition, 1.0);
            vNormalPosition = normalize((uScale * normalPosition).xyz);
            vAmbientColor = aAmbientColor;
            vDiffuseColor = aDiffuseColor;
            vSpecularColor = aSpecularColor;
            vSpecularExponent = aSpecularExponent;
        }
    `;
    
    try {
        var fShader = gl.createShader(gl.FRAGMENT_SHADER); // create frag shader
        gl.shaderSource(fShader,fShaderCode); // attach code to shader
        gl.compileShader(fShader); // compile the code for gpu execution

        var vShader = gl.createShader(gl.VERTEX_SHADER); // create vertex shader
        gl.shaderSource(vShader,vShaderCode); // attach code to shader
        gl.compileShader(vShader); // compile the code for gpu execution
            
        if (!gl.getShaderParameter(fShader, gl.COMPILE_STATUS)) { // bad frag shader compile
            throw "error during fragment shader compile: " + gl.getShaderInfoLog(fShader);
        } else if (!gl.getShaderParameter(vShader, gl.COMPILE_STATUS)) { // bad vertex shader compile
            throw "error during vertex shader compile: " + gl.getShaderInfoLog(vShader);
        } else { // no compile errors
            var shaderProgram = gl.createProgram(); // create the single shader program
            gl.attachShader(shaderProgram, fShader); // put frag shader in program
            gl.attachShader(shaderProgram, vShader); // put vertex shader in program
            gl.linkProgram(shaderProgram); // link program into gl context

            if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) { // bad program link
                throw "error during shader program linking: " + gl.getProgramInfoLog(shaderProgram);
            } else { // no shader program link errors
                gl.useProgram(shaderProgram); // activate shader program (frag and vert)
                
                aVertexPosition =  gl.getAttribLocation(shaderProgram, "aVertexPosition");
                aNormalPosition =  gl.getAttribLocation(shaderProgram, "aNormalPosition");
                aAmbientColor =  gl.getAttribLocation(shaderProgram, "aAmbientColor");
                aDiffuseColor =  gl.getAttribLocation(shaderProgram, "aDiffuseColor");
                aSpecularColor =  gl.getAttribLocation(shaderProgram, "aSpecularColor");
                aSpecularExponent =  gl.getAttribLocation(shaderProgram, "aSpecularExponent");

                uScale = gl.getUniformLocation(shaderProgram, "uScale");
                uModel = gl.getUniformLocation(shaderProgram, "uModel");
                uView = gl.getUniformLocation(shaderProgram, "uView");
                uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
                uEyePosition = gl.getUniformLocation(shaderProgram, "uEyePosition");

                gl.enableVertexAttribArray(aVertexPosition);
                gl.enableVertexAttribArray(aNormalPosition);
                gl.enableVertexAttribArray(aAmbientColor);
                gl.enableVertexAttribArray(aDiffuseColor);
                gl.enableVertexAttribArray(aSpecularColor);
                gl.enableVertexAttribArray(aSpecularExponent);
            } // end if no shader program link errors
        } // end if no compile errors
    } // end try 
    
    catch(e) {
        console.log(e);
    } // end catch
} // end setup shaders

// read triangles in, load them into webgl buffers
function loadTriangles() {
    var inputTriangles = getJSONFile(INPUT_TRIANGLES_URL,"triangles");

    if (inputTriangles != String.null) {
        var whichSetVert; // index of vertex in current triangle set
        var whichSetTri; // index of triangle in current triangle set
        var whichSetNorm; // index of normal in current triangle set

        var coordArray = []; // 1D array of vertex coords for WebGL
        var pinkIndexArray = []; // 1D array of pink triangle vertex indices for WebGL
        var yellowIndexArray = []; // 1D array of yellow triangle vertex indices for WebGL
        var ambientColorArray = []; // 1D array of ambient colors for WebGL
        var diffuseColorArray = []; // 1D array of diffuse colors for WebGL
        var specularColorArray = []; // 1D array of specular colors for WebGL
        var specularExponentArray = []; // 1D array of specular exponents for WebGL
        var normalArray = []; // 1D array of normals for WebGL

        var vtxBufferSize = 0; // the number of vertices in the vertex buffer
        var vtxToAdd = []; // vtx coords to add to the coord array
        var indexOffset = vec3.create(); // the index offset for the current set
        var triToAdd = vec3.create(); // tri indices to add to the index array

        for (var whichSet=0; whichSet<inputTriangles.length; whichSet++) {
            vec3.set(indexOffset,vtxBufferSize,vtxBufferSize,vtxBufferSize); // update vertex offset

            // set up the normal array
            for (whichSetNorm=0; whichSetNorm<inputTriangles[whichSet].normals.length; whichSetNorm++) {
                var normal = inputTriangles[whichSet].normals[whichSetNorm];
                normalArray.push(normal[0],normal[1],normal[2]);
            } // end for triangles in set
            
            // set up color arrays
            for (whichSetVert=0; whichSetVert<inputTriangles[whichSet].vertices.length; whichSetVert++) {
                var color = inputTriangles[whichSet].material.ambient;
                ambientColorArray.push(color[0],color[1],color[2]);
                color = inputTriangles[whichSet].material.diffuse;
                diffuseColorArray.push(color[0],color[1],color[2]);
                color = inputTriangles[whichSet].material.specular;
                specularColorArray.push(color[0],color[1],color[2]);
                var n = inputTriangles[whichSet].material.n;
                specularExponentArray.push(n);
            } // end for vertices in set
            
            // set up the vertex coord array
            for (whichSetVert=0; whichSetVert<inputTriangles[whichSet].vertices.length; whichSetVert++) {
                vtxToAdd = inputTriangles[whichSet].vertices[whichSetVert];
                coordArray.push(vtxToAdd[0],vtxToAdd[1],vtxToAdd[2]);
            } // end for vertices in set
            
            // set up the triangle index array, adjusting indices across sets
            for (whichSetTri=0; whichSetTri<inputTriangles[whichSet].triangles.length; whichSetTri++) {
                vec3.add(triToAdd,indexOffset,inputTriangles[whichSet].triangles[whichSetTri]);
                
                if (whichSet == 0) {
                    pinkIndexArray.push(triToAdd[0],triToAdd[1],triToAdd[2]);
                } else if (whichSet == 1) {
                    yellowIndexArray.push(triToAdd[0],triToAdd[1],triToAdd[2]);
                }
            } // end for triangles in set

            vtxBufferSize += inputTriangles[whichSet].vertices.length; // total number of vertices
            triTriangleBufferSize += inputTriangles[whichSet].triangles.length; // total number of tris
        } // end for each triangle set

        // send the normals to webGL
        normalTriangleBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,normalTriangleBuffer);
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(normalArray),gl.STATIC_DRAW);
        
        // send the colors to webGL
        ambientColorTriangleBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,ambientColorTriangleBuffer);
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(ambientColorArray),gl.STATIC_DRAW);
        diffuseColorTriangleBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,diffuseColorTriangleBuffer);
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(diffuseColorArray),gl.STATIC_DRAW);
        specularColorTriangleBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,specularColorTriangleBuffer);
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(specularColorArray),gl.STATIC_DRAW);
        specularExponentTriangleBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,specularExponentTriangleBuffer);
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(specularExponentArray),gl.STATIC_DRAW);

        // send the vertex coords to webGL
        vertexTriangleBuffer = gl.createBuffer(); // init empty vertex coord buffer
        gl.bindBuffer(gl.ARRAY_BUFFER,vertexTriangleBuffer); // activate that buffer
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(coordArray),gl.STATIC_DRAW); // coords to that buffer
        
        // send the triangles to webGL
        pinkTriangleTriangleBuffer = gl.createBuffer(); // init empty triangle index buffer
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, pinkTriangleTriangleBuffer); // activate that buffer
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(pinkIndexArray),gl.STATIC_DRAW); // indices to that buffertriangleTriangleBuffer = gl.createBuffer(); // init empty triangle index buffer
        yellowTriangleTriangleBuffer = gl.createBuffer(); // init empty triangle index buffer
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, yellowTriangleTriangleBuffer); // activate that buffer
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(yellowIndexArray),gl.STATIC_DRAW); // indices to that buffer
    } // end if triangles found
} // end load triangles

// render the loaded model
function renderSingleTriangle(color) {
    document.addEventListener("keydown", keypressHandler);

    mat4.fromScaling(scaleMatrix, scaleVector);
    mat4.fromTranslation(translationMatrix, translationVector);
    mat4.multiply(modelMatrix, translationMatrix, scaleMatrix);
    
    mat4.lookAt(viewMatrix, eyeVector, vec3.add(vec3.create(), eyeVector, atVector), upVector);
    mat4.perspective(projectionMatrix, Math.PI/2, 1, 0.1, 1000);

    gl.uniformMatrix4fv(uScale, false, scaleMatrix);
    gl.uniformMatrix4fv(uModel, false, modelMatrix);
    gl.uniformMatrix4fv(uView, false, viewMatrix);
    gl.uniformMatrix4fv(uProjection, false, projectionMatrix);
    gl.uniform3f(uEyePosition, eyeVector[0], eyeVector[1], eyeVector[2]);

    gl.bindBuffer(gl.ARRAY_BUFFER,ambientColorTriangleBuffer);
    gl.vertexAttribPointer(aAmbientColor,3,gl.FLOAT,false,0,0);
    gl.bindBuffer(gl.ARRAY_BUFFER,diffuseColorTriangleBuffer);
    gl.vertexAttribPointer(aDiffuseColor,3,gl.FLOAT,false,0,0);
    gl.bindBuffer(gl.ARRAY_BUFFER,specularColorTriangleBuffer);
    gl.vertexAttribPointer(aSpecularColor,3,gl.FLOAT,false,0,0);
    gl.bindBuffer(gl.ARRAY_BUFFER,specularExponentTriangleBuffer);
    gl.vertexAttribPointer(aSpecularExponent,1,gl.FLOAT,false,0,0);

    gl.bindBuffer(gl.ARRAY_BUFFER,vertexTriangleBuffer);
    gl.vertexAttribPointer(aVertexPosition,3,gl.FLOAT,false,0,0);

    gl.bindBuffer(gl.ARRAY_BUFFER,normalTriangleBuffer);
    gl.vertexAttribPointer(aNormalPosition,3,gl.FLOAT,false,0,0);

    if (color == "pink") {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,pinkTriangleTriangleBuffer); // activate
        gl.drawElements(gl.TRIANGLES,triTriangleBufferSize,gl.UNSIGNED_SHORT,0); // render
    } else if (color == "yellow") {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,yellowTriangleTriangleBuffer); // activate
        gl.drawElements(gl.TRIANGLES,triTriangleBufferSize*2,gl.UNSIGNED_SHORT,0); // render
    }
} // end render single triangle

function renderTriangles() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT); // clear frame/depth buffers

    renderSingleTriangle("pink");
    renderSingleTriangle("yellow");
} // end render triangles

function loadEllipsoids() {
    inputEllipsoids = getJSONFile(INPUT_ELLIPSOIDS_URL,"ellipsoids");
    var inputSphere = JSON.parse(INPUT_SPHERE_STRING);

    if (inputEllipsoids != String.null){
        var whichSetVert; // index of vertex in current triangle set
        var whichSetTri; // index of triangle in current triangle set

        var coordArray = []; // 1D array of vertex coords for WebGL
        var blueIndexArray = []; // 1D array of blue sphere vertex indices for WebGL
        var pinkIndexArray = []; // 1D array of pink sphere vertex indices for WebGL
        var yellowIndexArray = []; // 1D array of yellow sphere vertex indices for WebGL
        var ambientColorArray = []; // 1D array of ambient colors for WebGL
        var diffuseColorArray = []; // 1D array of diffuse colors for WebGL
        var specularColorArray = []; // 1D array of specular colors for WebGL
        var specularExponentArray = []; // 1D array of specular exponents for WebGL
        var normalArray = []; // 1D array of normals for WebGL

        var vtxBufferSize = 0; // the number of vertices in the vertex buffer
        var vtxToAdd = []; // vtx coords to add to the coord array
        var indexOffset = vec3.create(); // the index offset for the current set
        var triToAdd = vec3.create(); // tri indices to add to the index array

        for (var whichSet=0; whichSet<inputEllipsoids.length; whichSet++) {
            vec3.set(indexOffset,vtxBufferSize,vtxBufferSize,vtxBufferSize); // update vertex offset

            // set up color arrays
            for (whichSetVert=0; whichSetVert<inputSphere.vertices.length; whichSetVert++) {
                var color = inputEllipsoids[whichSet].ambient;
                ambientColorArray.push(color[0],color[1],color[2]);
                color = inputEllipsoids[whichSet].diffuse;
                diffuseColorArray.push(color[0],color[1],color[2]);
                color = inputEllipsoids[whichSet].specular;
                specularColorArray.push(color[0],color[1],color[2]);
                var n = inputEllipsoids[whichSet].n;
                specularExponentArray.push(n);
            }
            
            // set up the vertex coord array and normal array
            for (whichSetVert=0; whichSetVert<inputSphere.vertices.length; whichSetVert++) {
                vtxToAdd = vec3.normalize(vec3.create(), inputSphere.vertices[whichSetVert]);
                normalArray.push(vtxToAdd[0],vtxToAdd[1],vtxToAdd[2]);
                coordArray.push(vtxToAdd[0],vtxToAdd[1],vtxToAdd[2]);
            } // end for vertices in set

            // set up the triangle index array, adjusting indices across sets
            for (whichSetTri=0; whichSetTri<inputSphere.triangles.length; whichSetTri++) {
                vec3.add(triToAdd,indexOffset,inputSphere.triangles[whichSetTri]);
                
                if (whichSet == 0) {
                    blueIndexArray.push(triToAdd[0]-1,triToAdd[1]-1,triToAdd[2]-1);
                } else if (whichSet == 1) {
                    pinkIndexArray.push(triToAdd[0]-1,triToAdd[1]-1,triToAdd[2]-1);
                } else if (whichSet == 2) {
                    yellowIndexArray.push(triToAdd[0]-1,triToAdd[1]-1,triToAdd[2]-1);
                }
            } // end for triangles in set

            vtxBufferSize += inputSphere.vertices.length; // total number of vertices
            triSphereBufferSize += inputSphere.triangles.length; // total number of tris
        } // end for each ellipsoid

        // send the normals to webGL
        normalSphereBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,normalSphereBuffer);
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(normalArray),gl.STATIC_DRAW);

        // send the colors to webGL
        ambientColorSphereBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,ambientColorSphereBuffer);
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(ambientColorArray),gl.STATIC_DRAW);
        diffuseColorSphereBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,diffuseColorSphereBuffer);
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(diffuseColorArray),gl.STATIC_DRAW);
        specularColorSphereBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,specularColorSphereBuffer);
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(specularColorArray),gl.STATIC_DRAW);
        specularExponentSphereBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER,specularExponentSphereBuffer);
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(specularExponentArray),gl.STATIC_DRAW);

        // send the vertex coords to webGL
        vertexSphereBuffer = gl.createBuffer(); // init empty vertex coord buffer
        gl.bindBuffer(gl.ARRAY_BUFFER,vertexSphereBuffer); // activate that buffer
        gl.bufferData(gl.ARRAY_BUFFER,new Float32Array(coordArray),gl.STATIC_DRAW); // coords to that buffer
        
        // send the triangle indices to webGL
        blueTriangleSphereBuffer = gl.createBuffer(); // init empty triangle index buffer
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, blueTriangleSphereBuffer); // activate that buffer
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(blueIndexArray),gl.STATIC_DRAW); // indices to that buffer
        pinkTriangleSphereBuffer = gl.createBuffer(); // init empty triangle index buffer
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, pinkTriangleSphereBuffer); // activate that buffer
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(pinkIndexArray),gl.STATIC_DRAW); // indices to that buffer
        yellowTriangleSphereBuffer = gl.createBuffer(); // init empty triangle index buffer
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, yellowTriangleSphereBuffer); // activate that buffer
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,new Uint16Array(yellowIndexArray),gl.STATIC_DRAW); // indices to that buffer
    } // end if ellipsoids found
} // end load ellipsoids

function renderSingleEllipsoid(color) {
    document.addEventListener("keydown", keypressHandler);

    var translationVector, scaleVector;

    if (color == "blue") {
        var ellipsoid = inputEllipsoids[0];
        translationVector = vec3.fromValues(ellipsoid.x, ellipsoid.y, ellipsoid.z);
        scaleVector = vec3.fromValues(ellipsoid.a, ellipsoid.b, ellipsoid.c);
    } else if (color == "pink") {
        var ellipsoid = inputEllipsoids[1];
        translationVector = vec3.fromValues(ellipsoid.x, ellipsoid.y, ellipsoid.z);
        scaleVector = vec3.fromValues(ellipsoid.a, ellipsoid.b, ellipsoid.c);
    } else if (color == "yellow") {
        var ellipsoid = inputEllipsoids[2];
        translationVector = vec3.fromValues(ellipsoid.x, ellipsoid.y, ellipsoid.z);
        scaleVector = vec3.fromValues(ellipsoid.a, ellipsoid.b, ellipsoid.c);
    }

    mat4.fromScaling(scaleMatrix, scaleVector);
    mat4.fromTranslation(translationMatrix, translationVector);
    mat4.multiply(modelMatrix, translationMatrix, scaleMatrix);
    
    mat4.lookAt(viewMatrix, eyeVector, vec3.add(vec3.create(), eyeVector, atVector), upVector);
    mat4.perspective(projectionMatrix, Math.PI/2, 1, 0.1, 1000);

    gl.uniformMatrix4fv(uScale, false, mat4.transpose(mat4.create(), mat4.invert(mat4.create(), scaleMatrix)));
    gl.uniformMatrix4fv(uModel, false, modelMatrix);
    gl.uniformMatrix4fv(uView, false, viewMatrix);
    gl.uniformMatrix4fv(uProjection, false, projectionMatrix);
    gl.uniform3f(uEyePosition, eyeVector[0], eyeVector[1], eyeVector[2]);

    gl.bindBuffer(gl.ARRAY_BUFFER,ambientColorSphereBuffer);
    gl.vertexAttribPointer(aAmbientColor,3,gl.FLOAT,false,0,0);
    gl.bindBuffer(gl.ARRAY_BUFFER,diffuseColorSphereBuffer);
    gl.vertexAttribPointer(aDiffuseColor,3,gl.FLOAT,false,0,0);
    gl.bindBuffer(gl.ARRAY_BUFFER,specularColorSphereBuffer);
    gl.vertexAttribPointer(aSpecularColor,3,gl.FLOAT,false,0,0);
    gl.bindBuffer(gl.ARRAY_BUFFER,specularExponentSphereBuffer);
    gl.vertexAttribPointer(aSpecularExponent,1,gl.FLOAT,false,0,0);

    gl.bindBuffer(gl.ARRAY_BUFFER,vertexSphereBuffer);
    gl.vertexAttribPointer(aVertexPosition,3,gl.FLOAT,false,0,0);
    gl.bindBuffer(gl.ARRAY_BUFFER,normalSphereBuffer);
    gl.vertexAttribPointer(aNormalPosition,3,gl.FLOAT,false,0,0);

    if (color == "blue") {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,blueTriangleSphereBuffer); // activate
    } else if (color == "pink") {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,pinkTriangleSphereBuffer); // activate
    } else if (color == "yellow") {
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,yellowTriangleSphereBuffer); // activate
    }
    
    gl.drawElements(gl.TRIANGLES,triSphereBufferSize,gl.UNSIGNED_SHORT,0); // render
} // end render single ellipsoid

function renderEllipsoids() {
    renderSingleEllipsoid("blue");
    renderSingleEllipsoid("pink");
    renderSingleEllipsoid("yellow");
} // end render ellipsoids

/* MAIN -- HERE is where execution begins after window load */

function main() {
    setupWebGL(); // set up the webGL environment
    setupShaders(); // setup the webGL triangle shaders

    loadTriangles(); // load in the triangles from tri file
    renderTriangles(); // draw the triangles using webGL

    loadEllipsoids(); // load in the ellipsoids from ellipsoids file
    renderEllipsoids(); // draw the ellipsoids using webGL
} // end main