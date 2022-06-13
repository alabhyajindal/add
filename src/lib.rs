mod utils;

use wasm_bindgen::prelude::*;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(&format!("Hello, {}!", name))
}

#[wasm_bindgen]
pub fn add(a: i32, b: i32) -> i32 {
    let result =  a + b;
    return result;
    // alert(&format!("The result is {}!", result))
}

#[wasm_bindgen]
pub fn subtract(a: i32, b: i32) -> i32 {
    let result = a - b;
    return result;
}

#[wasm_bindgen]
pub fn multiply(a: i32, b: i32) -> i32 {
    let result = a * b;
    return result;
}

#[wasm_bindgen]
pub fn divide(a: i32, b: i32) -> i32 {
    let result = a / b;
    return result;
}

