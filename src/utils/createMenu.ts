type IMenuOptions = "" | "all" | "dog" | "cat" | "fish";

const createMenu = (activeMenu: IMenuOptions) => {
    let newMenu = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if (activeMenu !== '') {
        newMenu[activeMenu] = true;
    }

    return newMenu;
}

export { createMenu, IMenuOptions };