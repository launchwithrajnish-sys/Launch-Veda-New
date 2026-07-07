"use client";

import { useEffect } from "react";

export default function DevServiceWorkerCleanup() {
	useEffect(() => {
		if (process.env.NODE_ENV === "production") return;
		if (typeof window === "undefined") return;

		const isLocalhost =
			window.location.hostname === "localhost" ||
			window.location.hostname === "127.0.0.1";

		if (!isLocalhost) return;

		navigator.serviceWorker
			?.getRegistrations()
			.then((registrations) =>
				Promise.all(registrations.map((registration) => registration.unregister())),
			)
			.catch(() => undefined);

		if ("caches" in window) {
			caches
				.keys()
				.then((keys) => Promise.all(keys.map((key) => caches.delete(key))))
				.catch(() => undefined);
		}
	}, []);

	return null;
}
