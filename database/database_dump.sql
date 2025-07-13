--
-- PostgreSQL database dump
--

-- Dumped from database version 14.18 (Homebrew)
-- Dumped by pg_dump version 14.18 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: users; Type: TABLE; Schema: public; Owner: muratnasyrov01icloud.com
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100),
    email character varying(100),
    password character varying(100),
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO "muratnasyrov01icloud.com";

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: muratnasyrov01icloud.com
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO "muratnasyrov01icloud.com";

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: muratnasyrov01icloud.com
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: muratnasyrov01icloud.com
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: muratnasyrov01icloud.com
--

COPY public.users (id, name, email, password, created_at) FROM stdin;
1	haro	haro@test	6346735478685687543	2025-07-13 16:52:06.425546
2	muro	muro@test	6346735478685687543	2025-07-13 17:31:58.24393
3	muro	muro@test	6346735478685687543	2025-07-13 17:37:35.367116
\.


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: muratnasyrov01icloud.com
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: muratnasyrov01icloud.com
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

