(function() {
    var wasm;
    const __exports = {};


    const heap = new Array(32);

    heap.fill(undefined);

    heap.push(undefined, null, true, false);

function getObject(idx) { return heap[idx]; }

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

const __widl_f_set_property_CSSStyleDeclaration_target = typeof CSSStyleDeclaration === 'undefined' ? null : CSSStyleDeclaration.prototype.setProperty || function() {
    throw new Error(`wasm-bindgen: CSSStyleDeclaration.setProperty does not exist`);
};

let cachegetUint32Memory = null;
function getUint32Memory() {
    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== wasm.memory.buffer) {
        cachegetUint32Memory = new Uint32Array(wasm.memory.buffer);
    }
    return cachegetUint32Memory;
}

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

__exports.__widl_f_set_property_CSSStyleDeclaration = function(arg0, arg1, arg2, arg3, arg4, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    let varg3 = getStringFromWasm(arg3, arg4);
    try {
        __widl_f_set_property_CSSStyleDeclaration_target.call(getObject(arg0), varg1, varg3);
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_create_element_Document_target = typeof Document === 'undefined' ? null : Document.prototype.createElement || function() {
    throw new Error(`wasm-bindgen: Document.createElement does not exist`);
};

__exports.__widl_f_create_element_Document = function(arg0, arg1, arg2, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {
        return addHeapObject(__widl_f_create_element_Document_target.call(getObject(arg0), varg1));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

function isLikeNone(x) {
    return x === undefined || x === null;
}

const __widl_f_get_element_by_id_Document_target = typeof Document === 'undefined' ? null : Document.prototype.getElementById || function() {
    throw new Error(`wasm-bindgen: Document.getElementById does not exist`);
};

__exports.__widl_f_get_element_by_id_Document = function(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);

    const val = __widl_f_get_element_by_id_Document_target.call(getObject(arg0), varg1);
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

function GetOwnOrInheritedPropertyDescriptor(obj, id) {
    while (obj) {
        let desc = Object.getOwnPropertyDescriptor(obj, id);
        if (desc) return desc;
        obj = Object.getPrototypeOf(obj);
    }
return {}
}

const __widl_f_body_Document_target = GetOwnOrInheritedPropertyDescriptor(typeof Document === 'undefined' ? null : Document.prototype, 'body').get || function() {
    throw new Error(`wasm-bindgen: Document.body does not exist`);
};

__exports.__widl_f_body_Document = function(arg0) {

    const val = __widl_f_body_Document_target.call(getObject(arg0));
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

__exports.__widl_instanceof_Element = function(idx) {
    return getObject(idx) instanceof Element ? 1 : 0;
};

const __widl_f_set_id_Element_target = GetOwnOrInheritedPropertyDescriptor(typeof Element === 'undefined' ? null : Element.prototype, 'id').set || function() {
    throw new Error(`wasm-bindgen: Element.id does not exist`);
};

__exports.__widl_f_set_id_Element = function(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);
    __widl_f_set_id_Element_target.call(getObject(arg0), varg1);
};

const __widl_f_set_inner_html_Element_target = GetOwnOrInheritedPropertyDescriptor(typeof Element === 'undefined' ? null : Element.prototype, 'innerHTML').set || function() {
    throw new Error(`wasm-bindgen: Element.innerHTML does not exist`);
};

__exports.__widl_f_set_inner_html_Element = function(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);
    __widl_f_set_inner_html_Element_target.call(getObject(arg0), varg1);
};

const __widl_f_prevent_default_Event_target = typeof Event === 'undefined' ? null : Event.prototype.preventDefault || function() {
    throw new Error(`wasm-bindgen: Event.preventDefault does not exist`);
};

__exports.__widl_f_prevent_default_Event = function(arg0) {
    __widl_f_prevent_default_Event_target.call(getObject(arg0));
};

const __widl_f_target_Event_target = GetOwnOrInheritedPropertyDescriptor(typeof Event === 'undefined' ? null : Event.prototype, 'target').get || function() {
    throw new Error(`wasm-bindgen: Event.target does not exist`);
};

__exports.__widl_f_target_Event = function(arg0) {

    const val = __widl_f_target_Event_target.call(getObject(arg0));
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

const __widl_f_add_event_listener_with_callback_EventTarget_target = typeof EventTarget === 'undefined' ? null : EventTarget.prototype.addEventListener || function() {
    throw new Error(`wasm-bindgen: EventTarget.addEventListener does not exist`);
};

__exports.__widl_f_add_event_listener_with_callback_EventTarget = function(arg0, arg1, arg2, arg3, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {
        __widl_f_add_event_listener_with_callback_EventTarget_target.call(getObject(arg0), varg1, getObject(arg3));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

__exports.__widl_instanceof_HTMLCanvasElement = function(idx) {
    return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0;
};

const __widl_f_get_context_HTMLCanvasElement_target = typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype.getContext || function() {
    throw new Error(`wasm-bindgen: HTMLCanvasElement.getContext does not exist`);
};

__exports.__widl_f_get_context_HTMLCanvasElement = function(arg0, arg1, arg2, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {

        const val = __widl_f_get_context_HTMLCanvasElement_target.call(getObject(arg0), varg1);
        return isLikeNone(val) ? 0 : addHeapObject(val);

    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_set_width_HTMLCanvasElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype, 'width').set || function() {
    throw new Error(`wasm-bindgen: HTMLCanvasElement.width does not exist`);
};

__exports.__widl_f_set_width_HTMLCanvasElement = function(arg0, arg1) {
    __widl_f_set_width_HTMLCanvasElement_target.call(getObject(arg0), arg1);
};

const __widl_f_set_height_HTMLCanvasElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLCanvasElement === 'undefined' ? null : HTMLCanvasElement.prototype, 'height').set || function() {
    throw new Error(`wasm-bindgen: HTMLCanvasElement.height does not exist`);
};

__exports.__widl_f_set_height_HTMLCanvasElement = function(arg0, arg1) {
    __widl_f_set_height_HTMLCanvasElement_target.call(getObject(arg0), arg1);
};

__exports.__widl_instanceof_HTMLElement = function(idx) {
    return getObject(idx) instanceof HTMLElement ? 1 : 0;
};

const __widl_f_style_HTMLElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLElement === 'undefined' ? null : HTMLElement.prototype, 'style').get || function() {
    throw new Error(`wasm-bindgen: HTMLElement.style does not exist`);
};

__exports.__widl_f_style_HTMLElement = function(arg0) {
    return addHeapObject(__widl_f_style_HTMLElement_target.call(getObject(arg0)));
};

const __widl_f_set_oninput_HTMLElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLElement === 'undefined' ? null : HTMLElement.prototype, 'oninput').set || function() {
    throw new Error(`wasm-bindgen: HTMLElement.oninput does not exist`);
};

__exports.__widl_f_set_oninput_HTMLElement = function(arg0, arg1) {
    __widl_f_set_oninput_HTMLElement_target.call(getObject(arg0), getObject(arg1));
};

const __widl_f_set_onload_HTMLElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLElement === 'undefined' ? null : HTMLElement.prototype, 'onload').set || function() {
    throw new Error(`wasm-bindgen: HTMLElement.onload does not exist`);
};

__exports.__widl_f_set_onload_HTMLElement = function(arg0, arg1) {
    __widl_f_set_onload_HTMLElement_target.call(getObject(arg0), getObject(arg1));
};

__exports.__widl_f_new_Image = function(exnptr) {
    try {
        return addHeapObject(new Image());
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_set_src_HTMLImageElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLImageElement === 'undefined' ? null : HTMLImageElement.prototype, 'src').set || function() {
    throw new Error(`wasm-bindgen: HTMLImageElement.src does not exist`);
};

__exports.__widl_f_set_src_HTMLImageElement = function(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);
    __widl_f_set_src_HTMLImageElement_target.call(getObject(arg0), varg1);
};

__exports.__widl_instanceof_HTMLInputElement = function(idx) {
    return getObject(idx) instanceof HTMLInputElement ? 1 : 0;
};

const __widl_f_checked_HTMLInputElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLInputElement === 'undefined' ? null : HTMLInputElement.prototype, 'checked').get || function() {
    throw new Error(`wasm-bindgen: HTMLInputElement.checked does not exist`);
};

__exports.__widl_f_checked_HTMLInputElement = function(arg0) {
    return __widl_f_checked_HTMLInputElement_target.call(getObject(arg0));
};

const __widl_f_set_checked_HTMLInputElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLInputElement === 'undefined' ? null : HTMLInputElement.prototype, 'checked').set || function() {
    throw new Error(`wasm-bindgen: HTMLInputElement.checked does not exist`);
};

__exports.__widl_f_set_checked_HTMLInputElement = function(arg0, arg1) {
    __widl_f_set_checked_HTMLInputElement_target.call(getObject(arg0), arg1 !== 0);
};

const __widl_f_set_max_HTMLInputElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLInputElement === 'undefined' ? null : HTMLInputElement.prototype, 'max').set || function() {
    throw new Error(`wasm-bindgen: HTMLInputElement.max does not exist`);
};

__exports.__widl_f_set_max_HTMLInputElement = function(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);
    __widl_f_set_max_HTMLInputElement_target.call(getObject(arg0), varg1);
};

const __widl_f_set_min_HTMLInputElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLInputElement === 'undefined' ? null : HTMLInputElement.prototype, 'min').set || function() {
    throw new Error(`wasm-bindgen: HTMLInputElement.min does not exist`);
};

__exports.__widl_f_set_min_HTMLInputElement = function(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);
    __widl_f_set_min_HTMLInputElement_target.call(getObject(arg0), varg1);
};

const __widl_f_set_step_HTMLInputElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLInputElement === 'undefined' ? null : HTMLInputElement.prototype, 'step').set || function() {
    throw new Error(`wasm-bindgen: HTMLInputElement.step does not exist`);
};

__exports.__widl_f_set_step_HTMLInputElement = function(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);
    __widl_f_set_step_HTMLInputElement_target.call(getObject(arg0), varg1);
};

const __widl_f_set_type_HTMLInputElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLInputElement === 'undefined' ? null : HTMLInputElement.prototype, 'type').set || function() {
    throw new Error(`wasm-bindgen: HTMLInputElement.type does not exist`);
};

__exports.__widl_f_set_type_HTMLInputElement = function(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);
    __widl_f_set_type_HTMLInputElement_target.call(getObject(arg0), varg1);
};

let cachedTextEncoder = new TextEncoder('utf-8');

let WASM_VECTOR_LEN = 0;

function passStringToWasm(arg) {

    const buf = cachedTextEncoder.encode(arg);
    const ptr = wasm.__wbindgen_malloc(buf.length);
    getUint8Memory().set(buf, ptr);
    WASM_VECTOR_LEN = buf.length;
    return ptr;
}

const __widl_f_value_HTMLInputElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLInputElement === 'undefined' ? null : HTMLInputElement.prototype, 'value').get || function() {
    throw new Error(`wasm-bindgen: HTMLInputElement.value does not exist`);
};

__exports.__widl_f_value_HTMLInputElement = function(ret, arg0) {

    const retptr = passStringToWasm(__widl_f_value_HTMLInputElement_target.call(getObject(arg0)));
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

};

const __widl_f_set_value_HTMLInputElement_target = GetOwnOrInheritedPropertyDescriptor(typeof HTMLInputElement === 'undefined' ? null : HTMLInputElement.prototype, 'value').set || function() {
    throw new Error(`wasm-bindgen: HTMLInputElement.value does not exist`);
};

__exports.__widl_f_set_value_HTMLInputElement = function(arg0, arg1, arg2) {
    let varg1 = getStringFromWasm(arg1, arg2);
    __widl_f_set_value_HTMLInputElement_target.call(getObject(arg0), varg1);
};

const __widl_f_client_x_MouseEvent_target = GetOwnOrInheritedPropertyDescriptor(typeof MouseEvent === 'undefined' ? null : MouseEvent.prototype, 'clientX').get || function() {
    throw new Error(`wasm-bindgen: MouseEvent.clientX does not exist`);
};

__exports.__widl_f_client_x_MouseEvent = function(arg0) {
    return __widl_f_client_x_MouseEvent_target.call(getObject(arg0));
};

const __widl_f_client_y_MouseEvent_target = GetOwnOrInheritedPropertyDescriptor(typeof MouseEvent === 'undefined' ? null : MouseEvent.prototype, 'clientY').get || function() {
    throw new Error(`wasm-bindgen: MouseEvent.clientY does not exist`);
};

__exports.__widl_f_client_y_MouseEvent = function(arg0) {
    return __widl_f_client_y_MouseEvent_target.call(getObject(arg0));
};

const __widl_f_append_child_Node_target = typeof Node === 'undefined' ? null : Node.prototype.appendChild || function() {
    throw new Error(`wasm-bindgen: Node.appendChild does not exist`);
};

__exports.__widl_f_append_child_Node = function(arg0, arg1, exnptr) {
    try {
        return addHeapObject(__widl_f_append_child_Node_target.call(getObject(arg0), getObject(arg1)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_client_x_Touch_target = GetOwnOrInheritedPropertyDescriptor(typeof Touch === 'undefined' ? null : Touch.prototype, 'clientX').get || function() {
    throw new Error(`wasm-bindgen: Touch.clientX does not exist`);
};

__exports.__widl_f_client_x_Touch = function(arg0) {
    return __widl_f_client_x_Touch_target.call(getObject(arg0));
};

const __widl_f_client_y_Touch_target = GetOwnOrInheritedPropertyDescriptor(typeof Touch === 'undefined' ? null : Touch.prototype, 'clientY').get || function() {
    throw new Error(`wasm-bindgen: Touch.clientY does not exist`);
};

__exports.__widl_f_client_y_Touch = function(arg0) {
    return __widl_f_client_y_Touch_target.call(getObject(arg0));
};

const __widl_f_touches_TouchEvent_target = GetOwnOrInheritedPropertyDescriptor(typeof TouchEvent === 'undefined' ? null : TouchEvent.prototype, 'touches').get || function() {
    throw new Error(`wasm-bindgen: TouchEvent.touches does not exist`);
};

__exports.__widl_f_touches_TouchEvent = function(arg0) {
    return addHeapObject(__widl_f_touches_TouchEvent_target.call(getObject(arg0)));
};

const __widl_f_item_TouchList_target = typeof TouchList === 'undefined' ? null : TouchList.prototype.item || function() {
    throw new Error(`wasm-bindgen: TouchList.item does not exist`);
};

__exports.__widl_f_item_TouchList = function(arg0, arg1) {

    const val = __widl_f_item_TouchList_target.call(getObject(arg0), arg1);
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

__exports.__widl_instanceof_WebGLRenderingContext = function(idx) {
    return getObject(idx) instanceof WebGLRenderingContext ? 1 : 0;
};

const __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.bufferData || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.bufferData does not exist`);
};

__exports.__widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext = function(arg0, arg1, arg2, arg3) {
    __widl_f_buffer_data_with_array_buffer_view_WebGLRenderingContext_target.call(getObject(arg0), arg1, getObject(arg2), arg3);
};

const __widl_f_tex_image_2d_with_i32_and_i32_and_i32_and_format_and_type_and_opt_array_buffer_view_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.texImage2D || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.texImage2D does not exist`);
};

__exports.__widl_f_tex_image_2d_with_i32_and_i32_and_i32_and_format_and_type_and_opt_array_buffer_view_WebGLRenderingContext = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, exnptr) {
    try {
        __widl_f_tex_image_2d_with_i32_and_i32_and_i32_and_format_and_type_and_opt_array_buffer_view_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, getObject(arg9));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_tex_image_2d_with_u32_and_u32_and_image_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.texImage2D || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.texImage2D does not exist`);
};

__exports.__widl_f_tex_image_2d_with_u32_and_u32_and_image_WebGLRenderingContext = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, exnptr) {
    try {
        __widl_f_tex_image_2d_with_u32_and_u32_and_image_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3, arg4, arg5, getObject(arg6));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

let cachegetFloat32Memory = null;
function getFloat32Memory() {
    if (cachegetFloat32Memory === null || cachegetFloat32Memory.buffer !== wasm.memory.buffer) {
        cachegetFloat32Memory = new Float32Array(wasm.memory.buffer);
    }
    return cachegetFloat32Memory;
}

function getArrayF32FromWasm(ptr, len) {
    return getFloat32Memory().subarray(ptr / 4, ptr / 4 + len);
}

const __widl_f_uniform3fv_with_f32_array_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.uniform3fv || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.uniform3fv does not exist`);
};

__exports.__widl_f_uniform3fv_with_f32_array_WebGLRenderingContext = function(arg0, arg1, arg2, arg3) {
    let varg2 = getArrayF32FromWasm(arg2, arg3);
    __widl_f_uniform3fv_with_f32_array_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), varg2);
};

const __widl_f_uniform4fv_with_f32_array_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.uniform4fv || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.uniform4fv does not exist`);
};

__exports.__widl_f_uniform4fv_with_f32_array_WebGLRenderingContext = function(arg0, arg1, arg2, arg3) {
    let varg2 = getArrayF32FromWasm(arg2, arg3);
    __widl_f_uniform4fv_with_f32_array_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), varg2);
};

const __widl_f_uniform_matrix4fv_with_f32_array_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.uniformMatrix4fv || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.uniformMatrix4fv does not exist`);
};

__exports.__widl_f_uniform_matrix4fv_with_f32_array_WebGLRenderingContext = function(arg0, arg1, arg2, arg3, arg4) {
    let varg3 = getArrayF32FromWasm(arg3, arg4);
    __widl_f_uniform_matrix4fv_with_f32_array_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), arg2 !== 0, varg3);
};

const __widl_f_active_texture_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.activeTexture || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.activeTexture does not exist`);
};

__exports.__widl_f_active_texture_WebGLRenderingContext = function(arg0, arg1) {
    __widl_f_active_texture_WebGLRenderingContext_target.call(getObject(arg0), arg1);
};

const __widl_f_attach_shader_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.attachShader || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.attachShader does not exist`);
};

__exports.__widl_f_attach_shader_WebGLRenderingContext = function(arg0, arg1, arg2) {
    __widl_f_attach_shader_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), getObject(arg2));
};

const __widl_f_bind_buffer_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.bindBuffer || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.bindBuffer does not exist`);
};

__exports.__widl_f_bind_buffer_WebGLRenderingContext = function(arg0, arg1, arg2) {
    __widl_f_bind_buffer_WebGLRenderingContext_target.call(getObject(arg0), arg1, getObject(arg2));
};

const __widl_f_bind_framebuffer_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.bindFramebuffer || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.bindFramebuffer does not exist`);
};

__exports.__widl_f_bind_framebuffer_WebGLRenderingContext = function(arg0, arg1, arg2) {
    __widl_f_bind_framebuffer_WebGLRenderingContext_target.call(getObject(arg0), arg1, getObject(arg2));
};

const __widl_f_bind_renderbuffer_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.bindRenderbuffer || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.bindRenderbuffer does not exist`);
};

__exports.__widl_f_bind_renderbuffer_WebGLRenderingContext = function(arg0, arg1, arg2) {
    __widl_f_bind_renderbuffer_WebGLRenderingContext_target.call(getObject(arg0), arg1, getObject(arg2));
};

const __widl_f_bind_texture_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.bindTexture || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.bindTexture does not exist`);
};

__exports.__widl_f_bind_texture_WebGLRenderingContext = function(arg0, arg1, arg2) {
    __widl_f_bind_texture_WebGLRenderingContext_target.call(getObject(arg0), arg1, getObject(arg2));
};

const __widl_f_blend_func_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.blendFunc || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.blendFunc does not exist`);
};

__exports.__widl_f_blend_func_WebGLRenderingContext = function(arg0, arg1, arg2) {
    __widl_f_blend_func_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2);
};

const __widl_f_clear_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.clear || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.clear does not exist`);
};

__exports.__widl_f_clear_WebGLRenderingContext = function(arg0, arg1) {
    __widl_f_clear_WebGLRenderingContext_target.call(getObject(arg0), arg1);
};

const __widl_f_clear_color_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.clearColor || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.clearColor does not exist`);
};

__exports.__widl_f_clear_color_WebGLRenderingContext = function(arg0, arg1, arg2, arg3, arg4) {
    __widl_f_clear_color_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3, arg4);
};

const __widl_f_compile_shader_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.compileShader || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.compileShader does not exist`);
};

__exports.__widl_f_compile_shader_WebGLRenderingContext = function(arg0, arg1) {
    __widl_f_compile_shader_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));
};

const __widl_f_create_buffer_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.createBuffer || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.createBuffer does not exist`);
};

__exports.__widl_f_create_buffer_WebGLRenderingContext = function(arg0) {

    const val = __widl_f_create_buffer_WebGLRenderingContext_target.call(getObject(arg0));
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

const __widl_f_create_framebuffer_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.createFramebuffer || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.createFramebuffer does not exist`);
};

__exports.__widl_f_create_framebuffer_WebGLRenderingContext = function(arg0) {

    const val = __widl_f_create_framebuffer_WebGLRenderingContext_target.call(getObject(arg0));
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

const __widl_f_create_program_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.createProgram || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.createProgram does not exist`);
};

__exports.__widl_f_create_program_WebGLRenderingContext = function(arg0) {

    const val = __widl_f_create_program_WebGLRenderingContext_target.call(getObject(arg0));
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

const __widl_f_create_renderbuffer_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.createRenderbuffer || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.createRenderbuffer does not exist`);
};

__exports.__widl_f_create_renderbuffer_WebGLRenderingContext = function(arg0) {

    const val = __widl_f_create_renderbuffer_WebGLRenderingContext_target.call(getObject(arg0));
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

const __widl_f_create_shader_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.createShader || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.createShader does not exist`);
};

__exports.__widl_f_create_shader_WebGLRenderingContext = function(arg0, arg1) {

    const val = __widl_f_create_shader_WebGLRenderingContext_target.call(getObject(arg0), arg1);
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

const __widl_f_create_texture_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.createTexture || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.createTexture does not exist`);
};

__exports.__widl_f_create_texture_WebGLRenderingContext = function(arg0) {

    const val = __widl_f_create_texture_WebGLRenderingContext_target.call(getObject(arg0));
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

const __widl_f_disable_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.disable || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.disable does not exist`);
};

__exports.__widl_f_disable_WebGLRenderingContext = function(arg0, arg1) {
    __widl_f_disable_WebGLRenderingContext_target.call(getObject(arg0), arg1);
};

const __widl_f_draw_arrays_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.drawArrays || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.drawArrays does not exist`);
};

__exports.__widl_f_draw_arrays_WebGLRenderingContext = function(arg0, arg1, arg2, arg3) {
    __widl_f_draw_arrays_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3);
};

const __widl_f_draw_elements_with_i32_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.drawElements || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.drawElements does not exist`);
};

__exports.__widl_f_draw_elements_with_i32_WebGLRenderingContext = function(arg0, arg1, arg2, arg3, arg4) {
    __widl_f_draw_elements_with_i32_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3, arg4);
};

const __widl_f_enable_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.enable || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.enable does not exist`);
};

__exports.__widl_f_enable_WebGLRenderingContext = function(arg0, arg1) {
    __widl_f_enable_WebGLRenderingContext_target.call(getObject(arg0), arg1);
};

const __widl_f_enable_vertex_attrib_array_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.enableVertexAttribArray || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.enableVertexAttribArray does not exist`);
};

__exports.__widl_f_enable_vertex_attrib_array_WebGLRenderingContext = function(arg0, arg1) {
    __widl_f_enable_vertex_attrib_array_WebGLRenderingContext_target.call(getObject(arg0), arg1);
};

const __widl_f_framebuffer_renderbuffer_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.framebufferRenderbuffer || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.framebufferRenderbuffer does not exist`);
};

__exports.__widl_f_framebuffer_renderbuffer_WebGLRenderingContext = function(arg0, arg1, arg2, arg3, arg4) {
    __widl_f_framebuffer_renderbuffer_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3, getObject(arg4));
};

const __widl_f_framebuffer_texture_2d_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.framebufferTexture2D || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.framebufferTexture2D does not exist`);
};

__exports.__widl_f_framebuffer_texture_2d_WebGLRenderingContext = function(arg0, arg1, arg2, arg3, arg4, arg5) {
    __widl_f_framebuffer_texture_2d_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3, getObject(arg4), arg5);
};

const __widl_f_get_attrib_location_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.getAttribLocation || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.getAttribLocation does not exist`);
};

__exports.__widl_f_get_attrib_location_WebGLRenderingContext = function(arg0, arg1, arg2, arg3) {
    let varg2 = getStringFromWasm(arg2, arg3);
    return __widl_f_get_attrib_location_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), varg2);
};

const __widl_f_get_extension_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.getExtension || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.getExtension does not exist`);
};

__exports.__widl_f_get_extension_WebGLRenderingContext = function(arg0, arg1, arg2, exnptr) {
    let varg1 = getStringFromWasm(arg1, arg2);
    try {

        const val = __widl_f_get_extension_WebGLRenderingContext_target.call(getObject(arg0), varg1);
        return isLikeNone(val) ? 0 : addHeapObject(val);

    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

const __widl_f_get_program_info_log_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.getProgramInfoLog || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.getProgramInfoLog does not exist`);
};

__exports.__widl_f_get_program_info_log_WebGLRenderingContext = function(ret, arg0, arg1) {
    const val = __widl_f_get_program_info_log_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));
    const retptr = isLikeNone(val) ? [0, 0] : passStringToWasm(val);
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

};

const __widl_f_get_program_parameter_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.getProgramParameter || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.getProgramParameter does not exist`);
};

__exports.__widl_f_get_program_parameter_WebGLRenderingContext = function(arg0, arg1, arg2) {
    return addHeapObject(__widl_f_get_program_parameter_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), arg2));
};

const __widl_f_get_shader_info_log_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.getShaderInfoLog || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.getShaderInfoLog does not exist`);
};

__exports.__widl_f_get_shader_info_log_WebGLRenderingContext = function(ret, arg0, arg1) {
    const val = __widl_f_get_shader_info_log_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));
    const retptr = isLikeNone(val) ? [0, 0] : passStringToWasm(val);
    const retlen = WASM_VECTOR_LEN;
    const mem = getUint32Memory();
    mem[ret / 4] = retptr;
    mem[ret / 4 + 1] = retlen;

};

const __widl_f_get_shader_parameter_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.getShaderParameter || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.getShaderParameter does not exist`);
};

__exports.__widl_f_get_shader_parameter_WebGLRenderingContext = function(arg0, arg1, arg2) {
    return addHeapObject(__widl_f_get_shader_parameter_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), arg2));
};

const __widl_f_get_uniform_location_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.getUniformLocation || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.getUniformLocation does not exist`);
};

__exports.__widl_f_get_uniform_location_WebGLRenderingContext = function(arg0, arg1, arg2, arg3) {
    let varg2 = getStringFromWasm(arg2, arg3);

    const val = __widl_f_get_uniform_location_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), varg2);
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

const __widl_f_link_program_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.linkProgram || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.linkProgram does not exist`);
};

__exports.__widl_f_link_program_WebGLRenderingContext = function(arg0, arg1) {
    __widl_f_link_program_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));
};

const __widl_f_pixel_storei_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.pixelStorei || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.pixelStorei does not exist`);
};

__exports.__widl_f_pixel_storei_WebGLRenderingContext = function(arg0, arg1, arg2) {
    __widl_f_pixel_storei_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2);
};

const __widl_f_renderbuffer_storage_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.renderbufferStorage || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.renderbufferStorage does not exist`);
};

__exports.__widl_f_renderbuffer_storage_WebGLRenderingContext = function(arg0, arg1, arg2, arg3, arg4) {
    __widl_f_renderbuffer_storage_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3, arg4);
};

const __widl_f_shader_source_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.shaderSource || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.shaderSource does not exist`);
};

__exports.__widl_f_shader_source_WebGLRenderingContext = function(arg0, arg1, arg2, arg3) {
    let varg2 = getStringFromWasm(arg2, arg3);
    __widl_f_shader_source_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), varg2);
};

const __widl_f_tex_parameteri_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.texParameteri || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.texParameteri does not exist`);
};

__exports.__widl_f_tex_parameteri_WebGLRenderingContext = function(arg0, arg1, arg2, arg3) {
    __widl_f_tex_parameteri_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3);
};

const __widl_f_uniform1f_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.uniform1f || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.uniform1f does not exist`);
};

__exports.__widl_f_uniform1f_WebGLRenderingContext = function(arg0, arg1, arg2) {
    __widl_f_uniform1f_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), arg2);
};

const __widl_f_uniform1i_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.uniform1i || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.uniform1i does not exist`);
};

__exports.__widl_f_uniform1i_WebGLRenderingContext = function(arg0, arg1, arg2) {
    __widl_f_uniform1i_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), arg2);
};

const __widl_f_uniform4f_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.uniform4f || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.uniform4f does not exist`);
};

__exports.__widl_f_uniform4f_WebGLRenderingContext = function(arg0, arg1, arg2, arg3, arg4, arg5) {
    __widl_f_uniform4f_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1), arg2, arg3, arg4, arg5);
};

const __widl_f_use_program_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.useProgram || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.useProgram does not exist`);
};

__exports.__widl_f_use_program_WebGLRenderingContext = function(arg0, arg1) {
    __widl_f_use_program_WebGLRenderingContext_target.call(getObject(arg0), getObject(arg1));
};

const __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.vertexAttribPointer || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.vertexAttribPointer does not exist`);
};

__exports.__widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6) {
    __widl_f_vertex_attrib_pointer_with_i32_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3, arg4 !== 0, arg5, arg6);
};

const __widl_f_viewport_WebGLRenderingContext_target = typeof WebGLRenderingContext === 'undefined' ? null : WebGLRenderingContext.prototype.viewport || function() {
    throw new Error(`wasm-bindgen: WebGLRenderingContext.viewport does not exist`);
};

__exports.__widl_f_viewport_WebGLRenderingContext = function(arg0, arg1, arg2, arg3, arg4) {
    __widl_f_viewport_WebGLRenderingContext_target.call(getObject(arg0), arg1, arg2, arg3, arg4);
};

const __widl_f_delta_y_WheelEvent_target = GetOwnOrInheritedPropertyDescriptor(typeof WheelEvent === 'undefined' ? null : WheelEvent.prototype, 'deltaY').get || function() {
    throw new Error(`wasm-bindgen: WheelEvent.deltaY does not exist`);
};

__exports.__widl_f_delta_y_WheelEvent = function(arg0) {
    return __widl_f_delta_y_WheelEvent_target.call(getObject(arg0));
};

__exports.__widl_instanceof_Window = function(idx) {
    return getObject(idx) instanceof Window ? 1 : 0;
};

__exports.__widl_f_document_Window = function(arg0) {

    const val = getObject(arg0).document;
    return isLikeNone(val) ? 0 : addHeapObject(val);

};

const __widl_f_log_1__target = console.log;

__exports.__widl_f_log_1_ = function(arg0) {
    __widl_f_log_1__target(getObject(arg0));
};

__exports.__wbg_new_208e1332becb0e22 = function() {
    return addHeapObject(new Array());
};

__exports.__wbg_push_797a2105ee49f111 = function(arg0, arg1) {
    return getObject(arg0).push(getObject(arg1));
};

__exports.__wbg_new_c1b585153cd441ad = function(arg0) {
    return addHeapObject(new Float32Array(getObject(arg0)));
};

__exports.__wbg_subarray_6bef35518c0617bd = function(arg0, arg1, arg2) {
    return addHeapObject(getObject(arg0).subarray(arg1, arg2));
};

__exports.__wbg_newnoargs_6a80f84471205fc8 = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    return addHeapObject(new Function(varg0));
};

__exports.__wbg_call_582b20dfcad7fee4 = function(arg0, arg1, exnptr) {
    try {
        return addHeapObject(getObject(arg0).call(getObject(arg1)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

__exports.__wbg_apply_656120c46d5ef3da = function(arg0, arg1, arg2, exnptr) {
    try {
        return addHeapObject(Reflect.apply(getObject(arg0), getObject(arg1), getObject(arg2)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

__exports.__wbg_get_e5244e978dedcdd0 = function(arg0, arg1, exnptr) {
    try {
        return addHeapObject(Reflect.get(getObject(arg0), getObject(arg1)));
    } catch (e) {
        const view = getUint32Memory();
        view[exnptr / 4] = 1;
        view[exnptr / 4 + 1] = addHeapObject(e);

    }
};

__exports.__wbg_new_bc68e7aae4d4f791 = function(arg0) {
    return addHeapObject(new Uint8Array(getObject(arg0)));
};

__exports.__wbg_subarray_705096b76e15e94e = function(arg0, arg1, arg2) {
    return addHeapObject(getObject(arg0).subarray(arg1, arg2));
};

__exports.__wbg_new_3153ff3e90269012 = function(arg0) {
    return addHeapObject(new Uint16Array(getObject(arg0)));
};

__exports.__wbg_subarray_6f181829e5fd3854 = function(arg0, arg1, arg2) {
    return addHeapObject(getObject(arg0).subarray(arg1, arg2));
};

__exports.__wbg_instanceof_Memory_d223615e29613829 = function(idx) {
    return getObject(idx) instanceof WebAssembly.Memory ? 1 : 0;
};

__exports.__wbg_buffer_0413d5edaa0ff323 = function(arg0) {
    return addHeapObject(getObject(arg0).buffer);
};

__exports.__wbg_error_cc95a3d302735ca3 = function(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);

    varg0 = varg0.slice();
    wasm.__wbindgen_free(arg0, arg1 * 1);

    console.error(varg0);
};

function freeWebClient(ptr) {

    wasm.__wbg_webclient_free(ptr);
}
/**
* Used to run the application from the web
*/
class WebClient {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeWebClient(ptr);
    }

    /**
    * Create a new web client
    * @returns {}
    */
    constructor() {
        this.ptr = wasm.webclient_new();
    }
    /**
    * Start our WebGL Water application. `index.html` will call this function in order
    * to begin rendering.
    * @returns {void}
    */
    start() {
        return wasm.webclient_start(this.ptr);
    }
    /**
    * Update our simulation
    * @param {number} arg0
    * @returns {void}
    */
    update(arg0) {
        return wasm.webclient_update(this.ptr, arg0);
    }
    /**
    * Render the scene. `index.html` will call this once every requestAnimationFrame
    * @returns {void}
    */
    render() {
        return wasm.webclient_render(this.ptr);
    }
}
__exports.WebClient = WebClient;

__exports.__wbindgen_object_clone_ref = function(idx) {
    return addHeapObject(getObject(idx));
};

function dropObject(idx) {
    if (idx < 36) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

__exports.__wbindgen_object_drop_ref = function(i) { dropObject(i); };

__exports.__wbindgen_string_new = function(p, l) {
    return addHeapObject(getStringFromWasm(p, l));
};

__exports.__wbindgen_number_get = function(n, invalid) {
    let obj = getObject(n);
    if (typeof(obj) === 'number') return obj;
    getUint8Memory()[invalid] = 1;
    return 0;
};

__exports.__wbindgen_is_null = function(idx) {
    return getObject(idx) === null ? 1 : 0;
};

__exports.__wbindgen_is_undefined = function(idx) {
    return getObject(idx) === undefined ? 1 : 0;
};

__exports.__wbindgen_boolean_get = function(i) {
    let v = getObject(i);
    if (typeof(v) === 'boolean') {
        return v ? 1 : 0;
    } else {
        return 2;
    }
};

__exports.__wbindgen_is_symbol = function(i) {
    return typeof(getObject(i)) === 'symbol' ? 1 : 0;
};

__exports.__wbindgen_string_get = function(i, len_ptr) {
    let obj = getObject(i);
    if (typeof(obj) !== 'string') return 0;
    const ptr = passStringToWasm(obj);
    getUint32Memory()[len_ptr / 4] = WASM_VECTOR_LEN;
    return ptr;
};

__exports.__wbindgen_cb_drop = function(i) {
    const obj = getObject(i).original;
    dropObject(i);
    if (obj.cnt-- == 1) {
        obj.a = 0;
        return 1;
    }
    return 0;
};

__exports.__wbindgen_cb_forget = dropObject;

__exports.__wbindgen_memory = function() { return addHeapObject(wasm.memory); };

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

__exports.__wbindgen_rethrow = function(idx) { throw takeObject(idx); };

__exports.__wbindgen_closure_wrapper871 = function(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(39);
    const d = wasm.__wbg_function_table.get(40);
    const cb = function() {
        this.cnt++;
        try {
            return f(this.a, b);

        } finally {
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_closure_wrapper873 = function(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(46);
    const d = wasm.__wbg_function_table.get(47);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_closure_wrapper875 = function(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(52);
    const d = wasm.__wbg_function_table.get(53);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_closure_wrapper877 = function(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(50);
    const d = wasm.__wbg_function_table.get(51);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_closure_wrapper879 = function(a, b, _ignored) {
    const f = wasm.__wbg_function_table.get(48);
    const d = wasm.__wbg_function_table.get(49);
    const cb = function(arg0) {
        this.cnt++;
        let a = this.a;
        this.a = 0;
        try {
            return f(a, b, addHeapObject(arg0));

        } finally {
            this.a = a;
            if (this.cnt-- == 1) d(this.a, b);

        }

    };
    cb.a = a;
    cb.cnt = 1;
    let real = cb.bind(cb);
    real.original = cb;
    return addHeapObject(real);
};

__exports.__wbindgen_throw = function(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
};

function init(path_or_module) {
    let instantiation;
    const imports = { './webgl_water_tutorial': __exports };
    if (path_or_module instanceof WebAssembly.Module) {
        instantiation = WebAssembly.instantiate(path_or_module, imports)
        .then(instance => {
        return { instance, module: path_or_module }
    });
} else {
    const data = fetch(path_or_module);
    if (typeof WebAssembly.instantiateStreaming === 'function') {
        instantiation = WebAssembly.instantiateStreaming(data, imports);
    } else {
        instantiation = data
        .then(response => response.arrayBuffer())
        .then(buffer => WebAssembly.instantiate(buffer, imports));
    }
}
return instantiation.then(({instance}) => {
    wasm = init.wasm = instance.exports;

});
};
self.wasm_bindgen = Object.assign(init, __exports);
})();
