import * as L from 'leaflet';
import {Observable, Subject} from 'rxjs';

declare module 'leaflet' {
  namespace TileLayer {
    export class WMSHeader extends WMS {
      constructor(
        baseUrl: string,
        options: WMSOptions,
        header: { header: string; value: string }[],
        abort?: Observable<any>,
        results?: Observable<any>,
      );
    }
    export function wmsHeader(
      baseUrl: string,
      options: WMSOptions,
      header: { header: string; value: string }[],
      abort?: Observable<any>,
      results?: Subject<any>,
    ): L.TileLayer.WMSHeader;
  }
}
