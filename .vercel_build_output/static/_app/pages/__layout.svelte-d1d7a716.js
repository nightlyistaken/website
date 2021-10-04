import {
	S as s,
	i as a,
	s as e,
	D as t,
	e as l,
	c,
	a as o,
	d as r,
	b as n,
	f as d,
	E as f,
	F as h,
	G as i,
	H as u,
	x as v,
	u as m,
	k as $,
	t as p,
	j as E,
	I as g,
	n as b,
	g as z,
	m as L,
	J as A,
	K as x,
	o as y,
	v as k,
	L as B,
	A as I
} from '../chunks/vendor-948ce953.js';
/* empty css                                                         */ function T(s) {
	let a, e, $, p;
	const E = s[1].default,
		g = t(E, s, s[0], null);
	return {
		c() {
			(a = l('button')), g && g.c(), this.h();
		},
		l(s) {
			a = c(s, 'BUTTON', { class: !0, id: !0 });
			var e = o(a);
			g && g.l(e), e.forEach(r), this.h();
		},
		h() {
			n(a, 'class', 'toggler svelte-1igavef'), n(a, 'id', 'mode');
		},
		m(s, t) {
			d(s, a, t), g && g.m(a, null), (e = !0), $ || ((p = f(a, 'click', w)), ($ = !0));
		},
		p(s, [a]) {
			g && g.p && (!e || 1 & a) && h(g, E, s, s[0], e ? u(E, s[0], a, null) : i(s[0]), null);
		},
		i(s) {
			e || (v(g, s), (e = !0));
		},
		o(s) {
			m(g, s), (e = !1);
		},
		d(s) {
			s && r(a), g && g.d(s), ($ = !1), p();
		}
	};
}
function w() {
	window.document.body.classList.toggle('dark-mode'),
		(document.getElementById('mode').innerHTML = 'Entered Light Mode!');
}
function j(s, a, e) {
	let { $$slots: t = {}, $$scope: l } = a;
	return (
		(s.$$set = (s) => {
			'$$scope' in s && e(0, (l = s.$$scope));
		}),
		[l, t]
	);
}
class N extends s {
	constructor(s) {
		super(), a(this, s, j, T, e, {});
	}
}
const { document: H } = B;
function F(s) {
	let a;
	return {
		c() {
			a = p('Toggle');
		},
		l(s) {
			a = z(s, 'Toggle');
		},
		m(s, e) {
			d(s, a, e);
		},
		d(s) {
			s && r(a);
		}
	};
}
function M(s) {
	let a,
		e,
		B,
		I,
		T,
		w,
		j,
		M,
		U,
		C,
		D,
		O,
		S,
		X,
		G,
		J,
		K,
		P,
		R,
		V,
		_,
		q,
		Q,
		W,
		Y,
		Z,
		ss,
		as,
		es,
		ts,
		ls,
		cs,
		os,
		rs,
		ns;
	P = new N({ props: { $$slots: { default: [F] }, $$scope: { ctx: s } } });
	const ds = s[1].default,
		fs = t(ds, s, s[2], null);
	return {
		c() {
			(a = l('script')),
				(B = $()),
				(I = l('ul')),
				(T = l('li')),
				(w = l('a')),
				(j = p('Home')),
				(M = $()),
				(U = l('li')),
				(C = l('a')),
				(D = p('About me')),
				(O = $()),
				(S = l('li')),
				(X = l('a')),
				(G = p('Not Found')),
				(J = $()),
				(K = l('li')),
				E(P.$$.fragment),
				(R = $()),
				(V = l('button')),
				(_ = p('X')),
				(q = $()),
				fs && fs.c(),
				(Q = $()),
				(W = l('div')),
				(Y = l('label')),
				(Z = l('a')),
				(ss = $()),
				(as = l('label')),
				(es = l('a')),
				(ts = $()),
				(ls = l('label')),
				(cs = l('a')),
				this.h();
		},
		l(s) {
			const e = g('[data-svelte="svelte-zo0cfz"]', H.head);
			(a = c(e, 'SCRIPT', { src: !0 })),
				o(a).forEach(r),
				e.forEach(r),
				(B = b(s)),
				(I = c(s, 'UL', { id: !0, class: !0 }));
			var t = o(I);
			T = c(t, 'LI', { class: !0 });
			var l = o(T);
			w = c(l, 'A', { href: !0, class: !0 });
			var n = o(w);
			(j = z(n, 'Home')), n.forEach(r), l.forEach(r), (M = b(t)), (U = c(t, 'LI', { class: !0 }));
			var d = o(U);
			C = c(d, 'A', { href: !0, class: !0 });
			var f = o(C);
			(D = z(f, 'About me')),
				f.forEach(r),
				d.forEach(r),
				(O = b(t)),
				(S = c(t, 'LI', { class: !0 }));
			var h = o(S);
			X = c(h, 'A', { href: !0, class: !0 });
			var i = o(X);
			(G = z(i, 'Not Found')),
				i.forEach(r),
				h.forEach(r),
				(J = b(t)),
				(K = c(t, 'LI', { class: !0 }));
			var u = o(K);
			L(P.$$.fragment, u), u.forEach(r), (R = b(t)), (V = c(t, 'BUTTON', { class: !0 }));
			var v = o(V);
			(_ = z(v, 'X')),
				v.forEach(r),
				t.forEach(r),
				(q = b(s)),
				fs && fs.l(s),
				(Q = b(s)),
				(W = c(s, 'DIV', { class: !0 }));
			var m = o(W);
			Y = c(m, 'LABEL', { class: !0 });
			var $ = o(Y);
			(Z = c($, 'A', { class: !0, href: !0, 'aria-hidden': !0 })),
				o(Z).forEach(r),
				$.forEach(r),
				(ss = b(m)),
				(as = c(m, 'LABEL', { class: !0 }));
			var p = o(as);
			(es = c(p, 'A', { class: !0, href: !0, 'aria-hidden': !0 })),
				o(es).forEach(r),
				p.forEach(r),
				(ts = b(m)),
				(ls = c(m, 'LABEL', { class: !0 }));
			var E = o(ls);
			(cs = c(E, 'A', { class: !0, href: !0, 'aria-hidden': !0 })),
				o(cs).forEach(r),
				E.forEach(r),
				m.forEach(r),
				this.h();
		},
		h() {
			A(a.src, (e = 'https://use.fontawesome.com/a6bbc80ac1.js')) ||
				n(a, 'src', 'https://use.fontawesome.com/a6bbc80ac1.js'),
				n(w, 'href', '/'),
				n(w, 'class', 'svelte-ssdz85'),
				n(T, 'class', 'svelte-ssdz85'),
				n(C, 'href', '/about'),
				n(C, 'class', 'svelte-ssdz85'),
				n(U, 'class', 'svelte-ssdz85'),
				n(X, 'href', '/404'),
				n(X, 'class', 'svelte-ssdz85'),
				n(S, 'class', 'svelte-ssdz85'),
				n(K, 'class', 'svelte-ssdz85'),
				n(V, 'class', 'see collapse svelte-ssdz85'),
				n(I, 'id', 'menu'),
				n(I, 'class', 'background-opacity svelte-ssdz85'),
				n(Z, 'class', 'fa fa-github fa-2x svelte-ssdz85'),
				n(Z, 'href', 'https://github.com/dhairy-online'),
				n(Z, 'aria-hidden', 'true'),
				n(Y, 'class', 'svelte-ssdz85'),
				n(es, 'class', 'fa fa-twitter fa-2x svelte-ssdz85'),
				n(es, 'href', 'https://twitter.com/breadoonline'),
				n(es, 'aria-hidden', 'true'),
				n(as, 'class', 'svelte-ssdz85'),
				n(cs, 'class', 'fa fa-home fa-2x svelte-ssdz85'),
				n(cs, 'href', '/'),
				n(cs, 'aria-hidden', 'true'),
				n(ls, 'class', 'svelte-ssdz85'),
				n(W, 'class', 'footer svelte-ssdz85');
		},
		m(e, t) {
			x(H.head, a),
				d(e, B, t),
				d(e, I, t),
				x(I, T),
				x(T, w),
				x(w, j),
				x(I, M),
				x(I, U),
				x(U, C),
				x(C, D),
				x(I, O),
				x(I, S),
				x(S, X),
				x(X, G),
				x(I, J),
				x(I, K),
				y(P, K, null),
				x(I, R),
				x(I, V),
				x(V, _),
				d(e, q, t),
				fs && fs.m(e, t),
				d(e, Q, t),
				d(e, W, t),
				x(W, Y),
				x(Y, Z),
				x(W, ss),
				x(W, as),
				x(as, es),
				x(W, ts),
				x(W, ls),
				x(ls, cs),
				(os = !0),
				rs || ((ns = f(V, 'click', s[0])), (rs = !0));
		},
		p(s, [a]) {
			const e = {};
			4 & a && (e.$$scope = { dirty: a, ctx: s }),
				P.$set(e),
				fs &&
					fs.p &&
					(!os || 4 & a) &&
					h(fs, ds, s, s[2], os ? u(ds, s[2], a, null) : i(s[2]), null);
		},
		i(s) {
			os || (v(P.$$.fragment, s), v(fs, s), (os = !0));
		},
		o(s) {
			m(P.$$.fragment, s), m(fs, s), (os = !1);
		},
		d(s) {
			r(a),
				s && r(B),
				s && r(I),
				k(P),
				s && r(q),
				fs && fs.d(s),
				s && r(Q),
				s && r(W),
				(rs = !1),
				ns();
		}
	};
}
function U(s, a, e) {
	let { $$slots: t = {}, $$scope: l } = a;
	return (
		(s.$$set = (s) => {
			'$$scope' in s && e(2, (l = s.$$scope));
		}),
		[
			function () {
				I(() => {
					document.getElementsByClassName('see-text').content.style.display('block');
				});
			},
			t,
			l
		]
	);
}
class C extends s {
	constructor(s) {
		super(), a(this, s, U, M, e, {});
	}
}
export { C as default };
