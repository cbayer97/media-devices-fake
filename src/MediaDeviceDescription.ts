/**
 * Describes a media device that you an plug in with {@link MediaDevicesFake.attach}
 */
export interface MediaDeviceDescription {
    deviceId: string
    groupId: string
    kind: MediaDeviceKind
    label: string
}
