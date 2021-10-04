import {
	S as s,
	i as a,
	s as t,
	k as e,
	e as o,
	t as l,
	I as h,
	d as c,
	n,
	c as r,
	a as i,
	g as u,
	b as m,
	f as p,
	K as v,
	N as d,
	M as f,
	O as b,
	P as x
} from '../chunks/vendor-948ce953.js';
function T(s) {
	let a, t, T, g, E, H, q, A, I, O, F, N, j, k, B;
	return {
		c() {
			(a = e()),
				(t = o('main')),
				(T = o('div')),
				(g = o('h1')),
				(E = l('This is about me page.')),
				(H = e()),
				(q = o('p')),
				(A = l(
					'Oh! Hello noobs Im spped lol haha\n\t\t\tThis page is responsive too!\n\t\tHAHA lets goooooo'
				)),
				(I = e()),
				(O = o('button')),
				(F = l('Fun Facts')),
				(N = e()),
				(j = o('button')),
				(k = l('Report a issue')),
				this.h();
		},
		l(s) {
			h('[data-svelte="svelte-fwdx8p"]', document.head).forEach(c),
				(a = n(s)),
				(t = r(s, 'MAIN', { class: !0 }));
			var e = i(t);
			T = r(e, 'DIV', { class: !0 });
			var o = i(T);
			g = r(o, 'H1', { class: !0 });
			var l = i(g);
			(E = u(l, 'This is about me page.')),
				l.forEach(c),
				(H = n(o)),
				(q = r(o, 'P', { class: !0 }));
			var m = i(q);
			(A = u(
				m,
				'Oh! Hello noobs Im spped lol haha\n\t\t\tThis page is responsive too!\n\t\tHAHA lets goooooo'
			)),
				m.forEach(c),
				(I = n(o)),
				(O = r(o, 'BUTTON', { class: !0 }));
			var p = i(O);
			(F = u(p, 'Fun Facts')), p.forEach(c), (N = n(o)), (j = r(o, 'BUTTON', { class: !0 }));
			var v = i(j);
			(k = u(v, 'Report a issue')), v.forEach(c), o.forEach(c), e.forEach(c), this.h();
		},
		h() {
			(document.title = 'About me'),
				m(g, 'class', 'svelte-qmhx2n'),
				m(q, 'class', 'svelte-qmhx2n'),
				m(O, 'class', 'svelte-qmhx2n'),
				m(j, 'class', 'svelte-qmhx2n'),
				m(T, 'class', 'jumbo svelte-qmhx2n'),
				m(t, 'class', 'svelte-qmhx2n');
		},
		m(s, e) {
			p(s, a, e),
				p(s, t, e),
				v(t, T),
				v(T, g),
				v(g, E),
				v(T, H),
				v(T, q),
				v(q, A),
				v(T, I),
				v(T, O),
				v(O, F),
				v(T, N),
				v(T, j),
				v(j, k);
		},
		p: d,
		i(s) {
			B ||
				f(() => {
					(B = b(t, x, {})), B.start();
				});
		},
		o: d,
		d(s) {
			s && c(a), s && c(t);
		}
	};
}
class g extends s {
	constructor(s) {
		super(), a(this, s, null, T, t, {});
	}
}
export { g as default };
