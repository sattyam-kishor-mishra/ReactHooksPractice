import React, { useState } from 'react';
import { EffectHooksMouse } from './EffectHooksMouse';

export function EffectHooksMouseToggleDisplay() {
    const [display, setDisplay] = useState(true);
    return (
        <>
            <div>EffectHooksMouseToggleDisplay</div>
            <button onClick={() => setDisplay(!display)}>Toogle Display</button>
            {display && (
                <EffectHooksMouse />
            )}
        </>
    )
}

