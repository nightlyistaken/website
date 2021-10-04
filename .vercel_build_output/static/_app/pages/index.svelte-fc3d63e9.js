import {
	S as s,
	i as e,
	s as a,
	k as t,
	e as n,
	t as o,
	I as l,
	d as r,
	n as c,
	c as i,
	a as h,
	g as m,
	b as d,
	f as u,
	K as v,
	E as f,
	N as y,
	M as g,
	Q as p,
	O as b,
	P as I
} from '../chunks/vendor-948ce953.js';
/* empty css                                                         */ function x(s) {
	let e, a, x, k, q, A, B, M, F, N, R, T, j, H, O, _, P, U, D, K;
	return {
		c() {
			(e = t()),
				(a = n('main')),
				(x = n('div')),
				(k = n('h1')),
				(q = o("Hey there I'm breadA 👋 !")),
				(A = t()),
				(B = n('p')),
				(M = o("I'm developer currently making games for deno_sdl2.")),
				(F = n('br')),
				(N = o(
					" I'm Intrested in learning new things and eating some\n\t\treally delicious food, Although I'm really thin 😐 My hobby is to watch some minecraft videos and\n\t\thelp my mom especially in the morning. "
				)),
				(R = n('br')),
				(T = t()),
				(j = n('button')),
				(H = o('Fun Facts')),
				(O = t()),
				(_ = n('button')),
				(P = o('Report a issue')),
				this.h();
		},
		l(s) {
			l('[data-svelte="svelte-spo45x"]', document.head).forEach(r),
				(e = c(s)),
				(a = i(s, 'MAIN', { class: !0 }));
			var t = h(a);
			x = i(t, 'DIV', { class: !0 });
			var n = h(x);
			k = i(n, 'H1', { class: !0 });
			var o = h(k);
			(q = m(o, "Hey there I'm breadA 👋 !")),
				o.forEach(r),
				(A = c(n)),
				(B = i(n, 'P', { class: !0 }));
			var d = h(B);
			(M = m(d, "I'm developer currently making games for deno_sdl2.")),
				(F = i(d, 'BR', {})),
				(N = m(
					d,
					" I'm Intrested in learning new things and eating some\n\t\treally delicious food, Although I'm really thin 😐 My hobby is to watch some minecraft videos and\n\t\thelp my mom especially in the morning. "
				)),
				(R = i(d, 'BR', {})),
				d.forEach(r),
				(T = c(n)),
				(j = i(n, 'BUTTON', { class: !0 }));
			var u = h(j);
			(H = m(u, 'Fun Facts')), u.forEach(r), (O = c(n)), (_ = i(n, 'BUTTON', { class: !0 }));
			var v = h(_);
			(P = m(v, 'Report a issue')), v.forEach(r), n.forEach(r), t.forEach(r), this.h();
		},
		h() {
			(document.title = 'breadA'),
				d(k, 'class', 'svelte-qmhx2n'),
				d(B, 'class', 'svelte-qmhx2n'),
				d(j, 'class', 'svelte-qmhx2n'),
				d(_, 'class', 'svelte-qmhx2n'),
				d(x, 'class', 'jumbo svelte-qmhx2n'),
				d(a, 'class', 'svelte-qmhx2n');
		},
		m(s, t) {
			u(s, e, t),
				u(s, a, t),
				v(a, x),
				v(x, k),
				v(k, q),
				v(x, A),
				v(x, B),
				v(B, M),
				v(B, F),
				v(B, N),
				v(B, R),
				v(x, T),
				v(x, j),
				v(j, H),
				v(x, O),
				v(x, _),
				v(_, P),
				D || ((K = [f(j, 'click', w), f(_, 'click', E)]), (D = !0));
		},
		p: y,
		i(s) {
			U ||
				g(() => {
					(U = b(a, I, {})), U.start();
				});
		},
		o: y,
		d(s) {
			s && r(e), s && r(a), (D = !1), p(K);
		}
	};
}
function w() {
	window.location = '/funfacts';
}
function E() {
	window.location = 'https://github.com/dhairy-online/my-blog-v3';
}
class k extends s {
	constructor(s) {
		super(), e(this, s, null, x, a, {});
	}
}
export { k as default };
