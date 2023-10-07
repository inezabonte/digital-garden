import { createContext, useState } from "react";

export const MenuContext = createContext(false);

export default function MenuProvider({ children }) {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<MenuContext.Provider value={[openMenu, setOpenMenu]}>
			{children}
		</MenuContext.Provider>
	);
}
