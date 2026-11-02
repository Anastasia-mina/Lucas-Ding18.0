/* 署名 Lucas · 禁止二改、二传及商用。 */
// 1.18 group APIs use strict ID equality. Preserve the ID's original type.
export function groupIdFor(groups, value) {
    return (groups || []).find(group => String(group.id) === String(value))?.id;
}
export function canSwitchChat(context) {
    return !(context.streamingProcessor && !context.streamingProcessor.isFinished)
        && !context.isGenerating;
}
