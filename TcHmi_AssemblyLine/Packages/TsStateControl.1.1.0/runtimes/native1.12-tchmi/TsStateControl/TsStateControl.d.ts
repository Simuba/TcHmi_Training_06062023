declare module TcHmi {
    module Controls {
        module TsStateControl {
            class TsStateControl extends TcHmi.Controls.System.TcHmiControl {
                /** [1] void*.ers - JQuery elements */
                private __elementText;
                private __elementAuto;
                private __elementMan;
                private __elementStop;
                /** [2] void*.ers - Attributes */
                private __requestState;
                private __responseState;
                private __greenText;
                private __blueText;
                private __orangeText;
                /**
                 * @description Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList);
                protected __elementTemplateRoot: JQuery;
                /**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                __previnit(): void;
                /**
                 * @description Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values.
                 * @returns {void}
                 */
                __init(): void;
                /**
                * @description Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __attach(): void;
                /**
                * @description Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                __detach(): void;
                /**
                * @description Destroy the current control instance.
                * Will be called automatically if system destroys control!
                */
                destroy(): void;
                /** [5] void*.ers - Implement click events */
                private __onClickAuto;
                private __onClickMan;
                private __onClickStop;
                /** [6] void*.ers - Implement localization change */
                __onLocaleChanged(): (e: EventProvider.Event, ...data: any[]) => void;
                /** [7] void*.ers - On attribute changed */
                setRequestState: (data: number) => void;
                getRequestState: () => number;
                setResponseState: (data: number) => void;
                getResponseState: () => number;
                setOrangeState: (data: string) => void;
                getOrangeState: () => string;
                setBlueState: (data: string) => void;
                getBlueState: () => string;
                setGreenState: (data: string) => void;
                getGreenState: () => string;
                /** [8] void*.ers - Helper functions */
                private __updateStyle;
                private __getTextOfLocale;
            }
        }
    }
}
