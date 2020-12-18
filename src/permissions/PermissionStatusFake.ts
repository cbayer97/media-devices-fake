import {notImplemented} from '../not-implemented'

export class PermissionStatusFake implements PermissionStatus {
  constructor(public readonly state: PermissionState) {}

  set onchange(_value: ((this: PermissionStatus, ev: Event) => any) | null) {
    throw notImplemented('set PermissionStatusFake.onchange')
  }
  get onchange(): ((this: PermissionStatus, ev: Event) => any) | null {
    throw notImplemented('get PermissionStatusFake.onchange()')
  }

  addEventListener<K extends keyof PermissionStatusEventMap>(
    type: K,
    listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject | null,
    options?: boolean | AddEventListenerOptions
  ): void
  addEventListener(type: any, listener: any, options?: boolean | AddEventListenerOptions): void {
    throw notImplemented('PermissionStatusFake.addEventListener()')
  }

  dispatchEvent(event: Event): boolean {
    throw notImplemented('PermissionStatusFake.dispatchEvent()')
  }

  removeEventListener<K extends keyof PermissionStatusEventMap>(
    type: K,
    listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void
  removeEventListener(
    type: string,
    callback: EventListenerOrEventListenerObject | null,
    options?: EventListenerOptions | boolean
  ): void
  removeEventListener(type: any, listener: any, options?: boolean | EventListenerOptions): void {
    throw notImplemented('PermissionStatusFake.removeEventListener()')
  }
}
