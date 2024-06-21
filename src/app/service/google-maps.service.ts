import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoogleMapsService {
  private apiKey: string = 'AIzaSyBYVJhKTD63ccMTK1r43ALQomL_q1LLM88';

  constructor(private http: HttpClient) {}

  getDirections(origin: string, destination: string): Observable<any> {
    const url =
      `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&travelMode=DRIVE&avoid=ferries&` +
      //+ `polylineQuality=HIGH_QUALITY`
      `&key=${this.apiKey}`;
    return this.http.get(url);
  }

  getPlacesNearby(
    lat: number,
    lng: number,
    fuelType: number,
    height: number,
    width: number
  ): Observable<any> {
    const url = `https://www.gasbuddy.com/gaspricemap/map?fuelTypeId=${fuelType}&height=${height}&maxLat=${
      lat + 0.05
    }&maxLng=${lng + 0.005}&minLat=${lat - 0.005}&minLng=${
      lng - 0.05
    }&width=${width}`;
    let res = this.http.post(url, {});
    res.subscribe((response) => {
      console.log(':::', response);
    });
    return res;
  }

  getTestDirections(o: string, d: string): Observable<any> {
    return of(this.a);
  }

  testGetDirections(): Observable<any> {
    return this.getDirections('Toronto', 'Montreal');
  }

  a = {
    geocoded_waypoints: [
      {
        geocoder_status: 'OK',
        place_id: 'ChIJpTvG15DL1IkRd8S0KlBVNTI',
        types: ['locality', 'political'],
      },
      {
        geocoder_status: 'OK',
        place_id: 'ChIJv1rQpeoVK4gRd4bDfGYxLTU',
        types: ['locality', 'political'],
      },
    ],
    routes: [
      {
        bounds: {
          northeast: {
            lat: 43.7314724,
            lng: -79.37793119999999,
          },
          southwest: {
            lat: 43.6146629,
            lng: -79.76374489999999,
          },
        },
        copyrights: 'Map data ©2024 Google',
        legs: [
          {
            distance: {
              text: '44.1 km',
              value: 44086,
            },
            duration: {
              text: '37 mins',
              value: 2200,
            },
            end_address: 'Brampton, ON, Canada',
            end_location: {
              lat: 43.7314724,
              lng: -79.7625013,
            },
            start_address: 'Toronto, ON, Canada',
            start_location: {
              lat: 43.6532377,
              lng: -79.38273819999999,
            },
            steps: [
              {
                distance: {
                  text: '1.2 km',
                  value: 1206,
                },
                duration: {
                  text: '5 mins',
                  value: 326,
                },
                end_location: {
                  lat: 43.6431829,
                  lng: -79.37793119999999,
                },
                html_instructions:
                  'Head \u003cb\u003esouth\u003c/b\u003e on \u003cb\u003eBay St.\u003c/b\u003e towards \u003cb\u003eAlbert St\u003c/b\u003e',
                polyline: {
                  points:
                    'w_miGbmocNv@Uz@Uj@It@UHEBEDE@CBC@E@C@EBI@IBMBMHc@@G@C@E@C@C@ABC@CBAxBo@hBi@VIlA_@n@U`@MJCRIhA]b@MfA]pBo@`@M`@MBA`@M`@MHC`@OjAa@b@Oh@Qr@YRDJEXIb@ORG`@ODAFC`@M`@M`@Mb@M`@MTITGJEHANEVILG@?DALGJEDALEFCBC@A?A@ATMDADCDCNEHA',
                },
                start_location: {
                  lat: 43.6532377,
                  lng: -79.38273819999999,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '0.2 km',
                  value: 157,
                },
                duration: {
                  text: '1 min',
                  value: 41,
                },
                end_location: {
                  lat: 43.6423392,
                  lng: -79.37949549999999,
                },
                html_instructions:
                  'Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLake Shore Blvd W\u003c/b\u003e',
                maneuver: 'turn-right',
                polyline: {
                  points: '{`kiG`oncNRf@Tf@~@vB^x@DJBDHPHR',
                },
                start_location: {
                  lat: 43.6431829,
                  lng: -79.37793119999999,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '0.1 km',
                  value: 138,
                },
                duration: {
                  text: '1 min',
                  value: 28,
                },
                end_location: {
                  lat: 43.6417895,
                  lng: -79.38101209999999,
                },
                html_instructions: 'Slight \u003cb\u003eright\u003c/b\u003e',
                maneuver: 'turn-slight-right',
                polyline: {
                  points: 's{jiGzxncN@VBV@LBLBLDNDTPd@~@fC',
                },
                start_location: {
                  lat: 43.6423392,
                  lng: -79.37949549999999,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '13.5 km',
                  value: 13537,
                },
                duration: {
                  text: '10 mins',
                  value: 609,
                },
                end_location: {
                  lat: 43.61581169999999,
                  lng: -79.5373113,
                },
                html_instructions:
                  'Take the slip road onto \u003cb\u003eGardiner Expy W\u003c/b\u003e',
                polyline: {
                  points:
                    'exjiGhbocNRf@Th@Rd@?@Tf@N^h@zAL\\Nj@^jA@D@BBLFRFT@DJl@Jj@H\\BRF^Ph@DJ@@?@B@NNRtAV~ADTD\\Hd@Fh@Ff@DXJn@Hn@Hx@Hx@L`A@NDXBXD^LtA@FFn@Fn@B`@P`BJjAD\\BZFn@H~@Db@N|AN|AHv@Fn@JnAJdAJdAFr@@FBT`@lED^B^@LJdAB^Db@B^B`@Bl@Br@@Z@`@?X?f@?b@?f@Al@An@CzAC|AAVCbACxAAV?VA`@A\\?T?F?R?b@?`A@`@?XBv@@n@Bh@HlB@V@VBj@FhAD~@Dn@Bf@HfBD`AD~@FfBBx@Bd@@t@Bv@@`A@v@?v@@d@?t@?zA?z@?x@?t@@\\?`@@^@\\@Z@V@T?NBT@Z@L@LD`@B^BTFd@BRD\\Fb@N~@Nv@VxANv@Hf@RfAZ`BRfAZfB@BNv@`@xBBPRdAP~@DXLr@Hb@Hb@Hd@RbARhABLBNH\\BNF^H`@DXb@|BF\\RbAdBtJZhBJl@d@bC@FDXDRRfA?@Hb@P`ADNN~@Pz@VzAn@lDd@bCBLLt@NhA@@BXDZBVB^D`@@ZBX@P@h@@b@@f@@Z?h@?\\A`@AXAb@Cp@ATAPC\\I|@E^ANCNAJGd@Mp@Kp@CJGVKf@K^Qn@CHQl@M\\Sl@Qj@Sl@M\\EN_@hAOd@i@~AaAzCu@zB_@jAIRK\\ITGRELITMb@CFEJQh@ENIVABuAfEELu@|Bm@jBUr@Qh@CHCFITCLELKXMd@Ux@Of@Kd@IZIXMj@K`@Kh@Or@Q|@GZERQ`AMv@A?StAQlAGZ?BGd@G\\K~@AHIh@Eb@E`@OxAIt@Ed@IdAIbAEh@C\\C\\G`AGfAEfAGlACr@C~@AZ?LCr@ARAb@?VALAh@?TA`@?J?L?TArAAX?P?`@?Z?T?L@l@?f@?@@X?T?H@r@@N?R@P?H@T@T@X@R@RD~@@V@LDx@?H@PBT@L@VFv@DZ?F@JBTHz@D\\Fn@Fj@Hr@Db@BJ@LJv@Fb@BLBRDVFb@@HHd@Hh@RbABR@FBHNt@Ln@Jb@BPRz@Rv@Jb@BHPr@h@rBBJb@vA|AxEDJbAtCPh@Ph@FPJZJZFRFPDJHT@BTj@JTDJ@BDFl@tA@?Rb@LXXf@Nb@hAvBJTLVNVLVLVp@pABFZl@JVLVJVLVJVJVJXJVJVJXXp@HTLXJVLVJVDJFLLTJTLTNVLTNVLTNR\\j@\\h@NVl@|@l@|@z@rA^h@^h@NRNRX`@DF^f@NR^f@d@p@HJNRNRNT\\d@LPNRPTPVLRPTJRNTNVLTZj@JVLVTl@LXJZJXHXHXHZFXDNBJFZFZFZFXF\\Lv@DZFZJt@Lv@RtA@B@JV`Bb@rCRrAF\\Lv@T~APhAF\\ZpBFf@Jp@FZN`APhARtATtADVRrAhApHPlAHh@L|@DV@FN|@D\\t@|Eb@xC`@jCRrAFVBTTvA^fCRrARnAPpAJt@Jt@Jv@Lv@\\fCFf@BNDZJt@DZJv@Jv@BVDZJv@Jv@Jt@TlBJv@Jt@?BTdBFj@X|BHt@ZjCdAfJn@tFdCjTdAdJlAjKHz@PvAp@|FNrAdBjOfBlOFn@ZnCP|AJt@^bD^`Dz@vHJ~@L~@l@jFf@jEFb@Hv@v@~Gx@fHNnAVxB',
                },
                start_location: {
                  lat: 43.6417895,
                  lng: -79.38101209999999,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '1.5 km',
                  value: 1489,
                },
                duration: {
                  text: '1 min',
                  value: 65,
                },
                end_location: {
                  lat: 43.6187202,
                  lng: -79.5524764,
                },
                html_instructions:
                  'Take exit \u003cb\u003e139\u003c/b\u003e for \u003cb\u003eON-427\u003c/b\u003e towards \u003cb\u003eAirport\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eON-401\u003c/b\u003e',
                maneuver: 'ramp-right',
                polyline: {
                  points:
                    'yueiGdsmdNKh@?@JfAFr@L|ADl@NrBDd@Db@HhANhC@RXvEp@bKLzBLtBFhAH~ADz@FzAFdC@P?D?R?V?T?T?TARAJ?JAVCTE\\E`@EREVMd@GTGPITGNIRKPGNGHEHGJMNW\\MNKHEBKJIHSL[Tg@Xu@`@{@f@]Rg@Xq@^g@Vk@Xo@X[NOHMFOF]LOFKN',
                },
                start_location: {
                  lat: 43.61581169999999,
                  lng: -79.5373113,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '6.7 km',
                  value: 6656,
                },
                duration: {
                  text: '4 mins',
                  value: 247,
                },
                end_location: {
                  lat: 43.6722043,
                  lng: -79.5813024,
                },
                html_instructions:
                  'Continue onto \u003cb\u003eON-427 N\u003c/b\u003e',
                polyline: {
                  points:
                    '_hfiG~qpdNeBl@WH]Lg@Pm@R_@Lg@PoAb@_AZSHSFi@Ri@Pc@NWJsC~@s@Vs@V_AZSHk@Pg@PUHUHSFQF}@ZUHSFUHUHe@NWHSHk@PsAb@i@N{@Xq@TODw@Tg@P[JODSFC@QFSFSFWHUFSFSFi@NUH_AV}@VUF_AXk@Nm@Pi@Nk@Ni@Ni@PSFWF}@Tk@Nk@Ni@N_ATi@Ni@N_ATk@Li@N_ARi@NE@OBk@Ni@Lk@Li@LuA\\i@LuAZUFqAZw@RQDw@PUFQDs@PA@OBwBh@GBQDi@Nk@NSFo@PODi@LA@_AV{@ViBh@UFSFUHUFSFUFi@Pi@NSHk@NSHUFSFUHsA`@i@RSFk@PgBj@SHSFUH}@Zk@PSFsAd@SFIDKBSHUFSHUHIBIBUHSFSHUHC@QFSFSHUHE@MDSHWHg@P}@\\SHUFSHUHMFWHSHUHSFWJi@RWJQFSHUHQFi@RSHEBA?KDUJSH_@LiAb@SHSHUJSHg@RUHSHUJSHSHUHSHi@TSHi@TSHUH}@^QHUHi@Tg@RsAj@UHSH_A^g@Ti@RSHSJUHg@RSHUJSHi@Rg@TYJWJmCbA[Jc@P}@ZaBj@o@Te@P}@X_AZ_AX}@ZuAb@u@Tw@VgBh@oDfA[J_@LE@c@Lk@PUHg@NSHUFSFUHUFSHUFSFSFUHSFi@PSFUFi@PSFUHUFSFSHUFSFUHQDSHMDc@NQFUFOFIBa@NYFk@PWHk@P_AZ[J[JUHUFQFMDIBSFUH]JSFWHSHUHSJ]HSLQJQJSLSNQNQNQNQROPORORORMTMROVMVKTMXELCHKXIVM`@IZGXGZGZGZEZEZC\\EZC\\Ct@AXAN?VAZ?\\?\\@\\?\\@Z@Z?@B\\@\\F|@FhA@D@VJjA@N',
                },
                start_location: {
                  lat: 43.6187202,
                  lng: -79.5524764,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '1.0 km',
                  value: 983,
                },
                duration: {
                  text: '1 min',
                  value: 35,
                },
                end_location: {
                  lat: 43.6686728,
                  lng: -79.59234720000001,
                },
                html_instructions:
                  'Take the \u003cb\u003eON-401 W\u003c/b\u003e exit on the \u003cb\u003eleft\u003c/b\u003e',
                maneuver: 'ramp-left',
                polyline: {
                  points:
                    'gvpiGbfvdNJJBB?BD`@BRBb@@JF`@Dj@BRJhA@JJ`ADb@LrABXDd@Fh@RvBD`@Fp@?@NdALz@PfADPNr@FXFTJ`@Nf@FPLd@Xz@Rh@`@fAb@tATp@Vr@Xx@`@jAJXHVJZJVJXHXDLL\\L\\d@zA\\dARl@HV',
                },
                start_location: {
                  lat: 43.6722043,
                  lng: -79.5813024,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '4.9 km',
                  value: 4872,
                },
                duration: {
                  text: '3 mins',
                  value: 176,
                },
                end_location: {
                  lat: 43.6462502,
                  lng: -79.6441401,
                },
                html_instructions:
                  'Continue onto \u003cb\u003eON-401 W\u003c/b\u003e',
                polyline: {
                  points:
                    'e`piGdkxdNHZTp@Pl@X`AHZHZHVHXHZJ^FV@@FXHZHZFT@@HXFZHXHZBFLf@BHPp@H\\ZjAXzAZlALf@Nf@Rv@T|@XfAnAxEH\\HXHXHZHXHZBNDJHZFXHXHVH\\BHDPHXRt@HZFX^tAHZ\\nAHZHXHZPt@Tv@DR@FRr@HZJ\\Pp@HZJ^@HXbARt@FVFRHZHX?BHVFVH\\HXHX?@BHDNHZHXH\\HTH\\HXHZJZRr@HZHXJZFN@FJZHXJXHZJXJXHXJZJVHVJ\\JVHTXx@JXFRXt@JXLVFTf@pAJVJTLXLZb@fALVd@hALVLVJXLVLVHP@DLVZn@LVJR?@LXLVNXXl@LVLVBHDHNXLVHRBBHRBDJTLVNZJTHPVh@FHJVLT@DHPLV@BJRJVLVJVNXJRJVLVLVJVLVLXDHFLJVLVLVLVJTDHFLJTNXLVLVLVJVHNDFJVLVLTLVLVLVJVLVLVHR@@LXXl@P^FPP^DJNZJXLVHPN\\LXLXBDFNJXLTFPN\\LVXp@JXJVLVJVJVLXJVLXHPN^JVLXJXJTJZLZJTN^Nb@^~@Ll@Zv@JXJVHVn@fBJXHTTp@JXTr@JVv@~BHXJXJXX|@Xz@Vr@`@jAVx@ZdANf@Rt@`AbDlBpG\\jATt@Rr@^jA\\pAZbAb@bBHTNd@Nf@HZFRHXH\\HXHXFTDNFRFPDTL`@FVHZLd@FTt@lCR|@ZlAx@jDd@nBj@pC',
                },
                start_location: {
                  lat: 43.6686728,
                  lng: -79.59234720000001,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '2.5 km',
                  value: 2478,
                },
                duration: {
                  text: '2 mins',
                  value: 92,
                },
                end_location: {
                  lat: 43.6470066,
                  lng: -79.670361,
                },
                html_instructions:
                  'Take exit \u003cb\u003e344\u003c/b\u003e towards \u003cb\u003eBrampton\u003c/b\u003e',
                maneuver: 'ramp-right',
                polyline: {
                  points:
                    'atkiGznbeN?J?JBRLp@Nt@H\\DXFZFZFZFZBFBRFZLt@H\\Hj@BNNx@DR@DFZFZDZNv@H^PhADVVpANv@\\bBRfA@h@Db@BLJj@BRRlATdA^lBF\\H\\FVPp@Rr@HXJZRl@Tj@?Bl@tAf@bAf@`Az@rBFNVj@Tj@Tn@Pf@L^Lh@V`AFVRbAP`AFd@Jr@J~@Dx@B`@DbA@z@@r@A`@?VARCh@Ex@AR?B?HE^Gt@Kv@If@Kh@ABMp@Qt@M^Qj@Sj@Sh@Wj@Uf@[p@S`@MTA?IN{ArCm@x@W`@ABED?BAB?FcCdDq@dA_@h@eAzA]h@qAjBYd@kAbBeA|AgBdC',
                },
                start_location: {
                  lat: 43.6462502,
                  lng: -79.6441401,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '11.2 km',
                  value: 11244,
                },
                duration: {
                  text: '7 mins',
                  value: 393,
                },
                end_location: {
                  lat: 43.7225954,
                  lng: -79.76116789999999,
                },
                html_instructions:
                  'Continue onto \u003cb\u003eON-410 N\u003c/b\u003e',
                polyline: {
                  points:
                    'yxkiGvrgeNy@pAsCbECDY`@CFY`@EFeAzAQXsCdEgA~A_@j@k@x@m@~@q@dAuAzBeA`BKP_AtA{@rA?@Mb@SZQVOTMPMRQVQTCFg@t@MPA@OT_@f@MTOROTA@MPMROTORMROTORORMTOROROTMROTORKPQTOTOROTILCDQTMTKNCBORORMTORORMTOROR?@ORMROTORORMTOROROTOTKNQVOTMREDILOTORMRILEFORORMTOROTORCDYb@OROTORMTOROTOROROTMROTORMROTQTMPMT_@f@MTOROTORORMTKLSZORMROROTGHGHMROTORMROTMPORMTCBaAvAEFOROTKPA@ORMRORMROR]h@}@nAMTORMRORORMTORMRORORMRORMTORMROROTMRORMRORORMROTMRORORMRORMTORORSZg@t@ORm@|@a@n@W\\_@h@KPCBw@hAOVQTILSZ_@h@OT]f@o@~@IJsApBm@z@]f@mBrCm@z@MRQTORORQRORQRQPMPQPQPQPSPIHYVONSNQPSNQLQLQNQL]VIDQJQLSLEBMFQJULQHQJWLQHSJUHGD]LUHSHSHSFC@SHWHk@Rc@NOFODOF}Ah@y@ZGBa@LA@i@Pi@Rc@Nc@Nm@T_AZg@P_A\\m@RSHUHQFa@NG@i@RSHUFSHSHSF}@ZUHi@Rm@ToCbAOFe@PUHKDIDy@\\C@e@RMFGDUJULgAj@ULYNQLMFQLs@b@qA~@g@^SNQNUPKJA@c@^A?c@`@MLURWTUTEDc@b@ED[\\c@b@c@f@aAjAEF]b@KNOR_@f@IJe@p@_@h@A@{AvByArBsApB]f@o@~@g@r@u@fA[f@Yb@W^Y`@SXg@t@UZOVc@n@y@lA}@rAg@t@i@t@{@tAaArAW`@U^UZY`@[d@[d@OVe@p@S\\u@bA}@rAg@t@[d@{AxBo@~@iBjC}@pAQXq@`Aa@l@[b@oApBkAhBmAlBm@|@SXKNKR[`@q@~@sBpCSZkC`Ee@t@QTe@r@y@jAyBdDm@|@[d@IJuArB[d@aAvAINe@p@W`@W\\a@l@ILi@x@A@]d@Yb@mAfBmAjBg@t@GJs@fAY`@}@tAe@r@W^a@n@]h@uArBa@p@g@t@W\\sB~CaBfCc@p@{@rAwAvBk@|@{CtEWf@k@|@i@x@a@j@g@x@KNe@p@u@fAc@r@y@jAs@dAABw@jAA@OR]h@OTW\\EFm@~@A?g@v@EF_@h@AB[b@EF[f@o@|@OTQXu@fAQVSXm@~@]f@eA|AEFqAlBs@fAKN]f@[d@Y`@ILm@|@a@l@a@j@[f@IJ]f@QV?@KLQXKPA@MPU\\IJ_@j@GHU\\]f@a@l@ABm@|@i@v@OT[b@QXORA@}@rAa@l@KNUZILc@r@i@v@EFY`@_@h@OT[f@GHUZSXMR]h@OT]f@ORCBu@jAEDKNa@l@EFGJ[`@ABGJMP[d@_@j@KNa@j@KPe@p@',
                },
                start_location: {
                  lat: 43.6470066,
                  lng: -79.670361,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '0.5 km',
                  value: 512,
                },
                duration: {
                  text: '1 min',
                  value: 46,
                },
                end_location: {
                  lat: 43.7265782,
                  lng: -79.76374489999999,
                },
                html_instructions:
                  'Take exit \u003cb\u003e13\u003c/b\u003e for \u003cb\u003eBovaird Drive\u003c/b\u003e towards \u003cb\u003e13\u003c/b\u003e',
                maneuver: 'ramp-right',
                polyline: {
                  points:
                    'gqziGhjyeNY?A?A@QTIJMNUXWZ[^MNMNOPQPEFKLMJMLOLMJKHSJSLQHUFQDMBUBWBK?mA?y@@K@M?QBOBODOFMHKHGJIH[n@]l@',
                },
                start_location: {
                  lat: 43.7225954,
                  lng: -79.76116789999999,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '0.5 km',
                  value: 516,
                },
                duration: {
                  text: '1 min',
                  value: 53,
                },
                end_location: {
                  lat: 43.730188,
                  lng: -79.759715,
                },
                html_instructions:
                  'Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eBovaird Dr E\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003ePeel Regional Rd 10\u003c/b\u003e (signs for \u003cb\u003eBovaird Drive E\u003c/b\u003e)',
                maneuver: 'turn-right',
                polyline: {
                  points: 'cj{iGjzyeNoA_Bi@m@ACi@i@g@k@CCiD}Di@o@UWiBoBkDaE',
                },
                start_location: {
                  lat: 43.7265782,
                  lng: -79.76374489999999,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '0.2 km',
                  value: 196,
                },
                duration: {
                  text: '1 min',
                  value: 47,
                },
                end_location: {
                  lat: 43.7313059,
                  lng: -79.761607,
                },
                html_instructions:
                  'Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eGreat Lakes Dr\u003c/b\u003e',
                maneuver: 'turn-left',
                polyline: {
                  points: 'u`|iGfayeNQZOV{@fBCDc@|@MZkA|B',
                },
                start_location: {
                  lat: 43.730188,
                  lng: -79.759715,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '31 m',
                  value: 31,
                },
                duration: {
                  text: '1 min',
                  value: 22,
                },
                end_location: {
                  lat: 43.7310758,
                  lng: -79.76181509999999,
                },
                html_instructions:
                  'Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eRestricted-usage road\u003c/div\u003e',
                maneuver: 'turn-left',
                polyline: {
                  points: 'ug|iG`myeNZZJFDD',
                },
                start_location: {
                  lat: 43.7313059,
                  lng: -79.761607,
                },
                travel_mode: 'DRIVING',
              },
              {
                distance: {
                  text: '71 m',
                  value: 71,
                },
                duration: {
                  text: '1 min',
                  value: 20,
                },
                end_location: {
                  lat: 43.7314724,
                  lng: -79.7625013,
                },
                html_instructions:
                  'Turn \u003cb\u003eright\u003c/b\u003e\u003cdiv style="font-size:0.9em"\u003eRestricted-usage road\u003c/div\u003e',
                maneuver: 'turn-right',
                polyline: {
                  points: 'gf|iGjnyeNmAfC',
                },
                start_location: {
                  lat: 43.7310758,
                  lng: -79.76181509999999,
                },
                travel_mode: 'DRIVING',
              },
            ],
            traffic_speed_entry: [],
            via_waypoint: [],
          },
        ],
        overview_polyline: {
          points:
            'w_miGbmocNrBk@j@It@ULKFIHSLo@Nu@HMDEbFyAvDmAjKcDlGuBr@YRDd@O~Ai@~E{ArAa@l@ULKb@UTIHARf@tA~Cd@dALVHR@VDd@FZJd@pAlD|@xBnAbDtAvEb@|BJr@Vt@TTv@hFhAdJ|B|UbDv]PdCJ~C?lCKvGOzH?`CFbDh@lLXpGP|FFhF@rF@nDFpBTtDTlB~@tFjCtNrBfLlHha@jGf]Z`CNtBHxBBjCIpCQbCMjAe@tCq@nCw@bCuErN_H|ScD|J_B~F_BrHwAbJeAfJw@~KUhGGpBGdEChFDrEFjBTjFXtDv@nHl@pEnA~Gv@hDjAtEjChInBzFnAnDjB`E~BxEx@~A|A~Cr@~AlB|EzAbDvC|EpGlJtHjKx@vAjAhCn@hB`@~A~@jFtBdNvF|^bJhm@hCxQ~@lHvA`LxIzu@hSbgBvFjf@VxBKh@?@f@fGd@fG|AxVl@zKVnHCrCKvA_@rBa@lAe@~@s@bAk@h@aBfAwDvBuDjBiAh@m@TKNcEvAwIxCoTpHeQtFgN~DaIxBaKhC}UxFmOzDwP`FuRnGuGzByK|DsJrDsLzEyOpGeJlDqNzEiVrHyJzCkDhAaEnAwKlDq@Te@XkAx@eAdAo@z@y@xAc@fAm@nB_@lBUpBK|BAnBDrBd@nH@NJJBFNdB~@pJbA|Jt@hEj@xBvD`L~B~GlClIrBfHz@bDlAvEd@hBt@hDfAdEdDdM|@jD~EhRlD~MvCrKfDdKpCvHxCdHxE`KhJ`ShKrT~DfJ|EjLp@bB^bAl@lB|@`CzAhE`DpJjBtF`CfIrHlWxAdFbAtDtAdFnCfLj@|CB^l@~C|@|E~@dF|BbMRfA@h@Hp@b@lCfAnFv@vCt@xBxDnIjAvCdArDt@bEVrBHzAF~B?tAKnCA`@c@tD[~A_@tAe@vA}AnDm@fA{ArCm@x@Yd@GTuDjFeBdCuE~GwLjQsLhQyEtH{BhDMd@cAzAu@hAuCfEgFtHyE`HuLjQ}_@bk@mQtW_Q~VeC~CkCjC_DbC}BrA_ChA_DhAmQjGiMnEuI`DoD`BiCvAeDxBuC~BaDxCiBnBqBfCwHpKmI`MwGvJoEtG}A~B}G`KuLfQ_JhNuEnGiF`I{LrQwDxFmTh\\mRvYcAdBkAdBoCbE{FtIkDdFkObUqT~[eSdZuArBm@|@e@p@Y?C@[`@wAdBkBrB}@n@{@^mAP_DB_@B_@H]PSTe@x@]l@oA_Bk@q@qAuAmFiGuGqHa@r@qBfEkA|BZZPLmAfC',
        },
        summary: 'Gardiner Expy W and ON-410 N',
        warnings: [],
        waypoint_order: [],
      },
    ],
    status: 'OK',
  };
}
