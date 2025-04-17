import styles from "@/styles/layout/layout.module.scss";

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className={styles['layout-wrapper']} >
            <div>
               {children}
            </div>
        </div>
			
	);
}