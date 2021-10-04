import {
	S as s,
	i as t,
	s as r,
	e as a,
	k as e,
	t as n,
	c as o,
	a as h,
	n as c,
	g as l,
	d as u,
	b as i,
	f,
	K as m,
	h as d,
	M as v,
	N as p,
	O as x,
	P as E
} from '../chunks/vendor-948ce953.js';
function q(s) {
	let t, r, e;
	return {
		c() {
			(t = a('h1')), (r = n('Internal Server Error: ')), (e = n(s[1])), this.h();
		},
		l(a) {
			t = o(a, 'H1', { class: !0 });
			var n = h(t);
			(r = l(n, 'Internal Server Error: ')), (e = l(n, s[1])), n.forEach(u), this.h();
		},
		h() {
			i(t, 'class', 'svelte-qmhx2n');
		},
		m(s, a) {
			f(s, t, a), m(t, r), m(t, e);
		},
		p(s, t) {
			2 & t && d(e, s[1]);
		},
		d(s) {
			s && u(t);
		}
	};
}
function I(s) {
	let t, r, v, p, x, E;
	return {
		c() {
			(t = a('h1')),
				(r = n(s[1])),
				(v = n(' not found.')),
				(p = e()),
				(x = a('p')),
				(E = n('It seems you have found something that does not exist.')),
				this.h();
		},
		l(a) {
			t = o(a, 'H1', { class: !0 });
			var e = h(t);
			(r = l(e, s[1])),
				(v = l(e, ' not found.')),
				e.forEach(u),
				(p = c(a)),
				(x = o(a, 'P', { class: !0 }));
			var n = h(x);
			(E = l(n, 'It seems you have found something that does not exist.')), n.forEach(u), this.h();
		},
		h() {
			i(t, 'class', 'svelte-qmhx2n'), i(x, 'class', 'svelte-qmhx2n');
		},
		m(s, a) {
			f(s, t, a), m(t, r), m(t, v), f(s, p, a), f(s, x, a), m(x, E);
		},
		p(s, t) {
			2 & t && d(r, s[1]);
		},
		d(s) {
			s && u(t), s && u(p), s && u(x);
		}
	};
}
function g(s) {
	let t, r, g, $, H;
	function S(s, t) {
		return 404 == s[1] ? I : q;
	}
	let b = S(s),
		j = b(s);
	return {
		c() {
			(t = a('div')), j.c(), (r = e()), (g = a('h4')), ($ = n(s[0])), this.h();
		},
		l(a) {
			t = o(a, 'DIV', { class: !0 });
			var e = h(t);
			j.l(e), (r = c(e)), (g = o(e, 'H4', { class: !0 }));
			var n = h(g);
			($ = l(n, s[0])), n.forEach(u), e.forEach(u), this.h();
		},
		h() {
			i(g, 'class', 'svelte-qmhx2n'), i(t, 'class', 'jumbo error svelte-qmhx2n');
		},
		m(s, a) {
			f(s, t, a), j.m(t, null), m(t, r), m(t, g), m(g, $);
		},
		p(s, [a]) {
			b === (b = S(s)) && j ? j.p(s, a) : (j.d(1), (j = b(s)), j && (j.c(), j.m(t, r))),
				1 & a && d($, s[0]);
		},
		i(s) {
			H ||
				v(() => {
					(H = x(t, E, {})), H.start();
				});
		},
		o: p,
		d(s) {
			s && u(t), j.d();
		}
	};
}
function $({ error: s, status: t }) {
	return { props: { error: `${s.message}`, status: `${t}` } };
}
function H(s, t, r) {
	let { error: a } = t,
		{ status: e } = t;
	return (
		(s.$$set = (s) => {
			'error' in s && r(0, (a = s.error)), 'status' in s && r(1, (e = s.status));
		}),
		[a, e]
	);
}
class S extends s {
	constructor(s) {
		super(), t(this, s, H, g, r, { error: 0, status: 1 });
	}
}
export { S as default, $ as load };
