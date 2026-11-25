(() => {
  'use strict';
  const nav = [
    ['For Contractors','for-contractors.html'],
    ['Recruitment Agencies','recruitment-agencies.html'],
    ['Our Services','our-services.html'],
    ['Knowledge Hub','knowledge-hub.html'],
    ['About EOS','about-eos.html'],
    ['Contact Us','contact-us.html'],
  ];
  const current=(location.pathname.split('/').pop() || 'home.html');
  const esc=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('"','&quot;');
  const headerCSS=`
    :host {display:block;position:relative;z-index:99999;font:400 14px/1.5 Inter,'Segoe UI',Arial,sans-serif;color:#192744;--navy:#142345;--gold:#f5ae42}
    *,*::before,*::after {box-sizing:border-box}
    a{text-decoration:none;color:inherit}
    button{font-family:inherit;cursor:pointer}
    .bar{background:#fff;box-shadow:0 1px 0 rgba(18,30,56,.10);border-bottom:1px solid #e9e7e1}
    .inner{min-height:90px;max-width:1480px;margin:auto;padding:12px clamp(20px,3vw,44px);display:flex;align-items:center;gap:18px;justify-content:space-between}
    .brand{display:inline-flex;flex:none;flex-direction:column;gap:1px;align-items:flex-start;justify-content:center;min-width:110px}
    .brand img{display:block;width:110px;height:auto;max-height:45px;object-fit:contain}
    .brand small{font-size:8px;line-height:1.2;font-weight:700;letter-spacing:2.0px;color:#bd8228;padding-left:2px;white-space:nowrap}
    nav{display:flex;align-items:center;gap:clamp(9px,1.1vw,18px);flex:0 1 auto;min-width:0}
    .primary-item{display:flex;align-items:center;position:relative;min-height:48px;flex:none}
    .primary-link{font-size:clamp(11.8px,.94vw,14.1px);font-weight:650;white-space:nowrap;line-height:1.4;padding:13px 0;position:relative;transition:color .15s}
    .primary-link:hover,.primary-link:focus-visible,.primary-item.is-open>.primary-link{color:#b17c2a}
    .primary-link[aria-current=page]{color:#a97830}
    .primary-link[aria-current=page]::after{content:'';position:absolute;left:0;right:0;bottom:7px;height:2px;background:#e6ab4e}
    .drop-toggle{background:none;border:0;padding:8px 0 8px 5px;color:#314060;display:inline-flex;align-items:center;justify-content:center;min-width:20px}
    .drop-toggle svg{width:13px;height:13px;transition:transform .18s}
    .primary-item.is-open>.drop-toggle svg{transform:rotate(180deg)}
    .drop-menu{display:none;position:absolute;top:calc(100% - 2px);left:-18px;min-width:232px;width:max-content;max-width:310px;background:#fff;border:1px solid #e6e7ed;border-top:3px solid #efad44;border-radius:0 0 12px 12px;box-shadow:0 17px 38px rgba(13,24,47,.17);padding:10px 8px;z-index:20}
    .drop-menu a,.drop-menu button{font:550 13px/1.4 Inter,'Segoe UI',Arial,sans-serif;color:#192744;background:transparent;border:0;display:flex;align-items:center;gap:12px;width:100%;padding:11px 12px;text-align:left;white-space:nowrap;border-radius:7px}
    .drop-menu a:hover,.drop-menu a:focus-visible,.drop-menu button:hover,.drop-menu button:focus-visible{background:#f6f2ea;color:#99671e}
    .drop-menu .subline{font-size:9px;color:#99671e;letter-spacing:.3px;margin-left:auto}
    .drop-menu .bottom-note{font-size:10px;line-height:1.55;color:#67738a;white-space:normal;border-top:1px solid #eceef0;padding:10px 12px 3px}
    @media(min-width:1221px){.primary-item.is-open>.drop-menu{display:block}}
    .drop-menu[hidden]{display:none!important}
    .skip-link{position:absolute;left:16px;top:12px;z-index:60;padding:11px 16px;border-radius:7px;background:#142345;color:#fff;font-weight:700;transform:translateY(-200%)}
    .skip-link:focus{transform:none}
    .actions{display:flex;align-items:center;flex:none;gap:10px}
    .worker-login{display:inline-flex;align-items:center;justify-content:center;gap:7px;font-weight:700;font-size:12.5px;color:#18294d;background:#fff;border:1.5px solid #354362;border-radius:999px;padding:11px 15px;min-height:42px;white-space:nowrap}
    .worker-login:hover,.worker-login:focus-visible{background:#f7f7f5;border-color:#c38a37}
    .worker-login svg{width:15px;height:15px;flex:none}
    .join{display:inline-flex;align-items:center;justify-content:center;background:#f5ae42;padding:12px 20px;border-radius:999px;color:#152243;font-weight:800;font-size:12.7px;white-space:nowrap;min-height:44px}
    .join:hover,.join:focus-visible{background:#e6a037}
    .mobile-toggle{display:none;align-items:center;justify-content:center;gap:8px;border:1px solid #dcdfe6;color:var(--navy);background:#fff;min-height:40px;padding:7px 12px;border-radius:999px;font-size:11px;letter-spacing:.5px;font-weight:800}
    .mobile-toggle svg{width:17px;height:17px}
    .status{position:absolute;right:30px;top:calc(100% + 7px);z-index:45;padding:13px 17px;background:#142345;color:white;box-shadow:0 10px 28px #15234438;max-width:min(355px,calc(100vw - 36px));border-radius:9px;font-size:12.5px;line-height:1.5}
    .status[hidden]{display:none}
    :focus-visible{outline:3px solid #e7a740;outline-offset:3px}
    .join-mobile,.worker-mobile{display:none}
    @media(max-width:1220px){
      .inner{min-height:76px;padding:10px 22px}
      nav{display:none;position:absolute;left:0;right:0;top:100%;background:#fff;box-shadow:0 20px 30px #13214120;border-top:1px solid #e5e5e5;z-index:25;padding:12px clamp(16px,5vw,65px) 28px;align-items:stretch;flex-direction:column;gap:0;max-height:calc(100dvh - 75px);overflow-y:auto}
      nav.open{display:flex}
      .primary-item{display:flex;align-items:stretch;min-height:0;flex-wrap:wrap;border-bottom:1px solid #e9ebee}
      .primary-link{padding:15px 5px;flex:1;font-size:15px;min-width:0}
      .primary-link[aria-current=page]::after{display:none}
      .drop-toggle{min-width:45px;padding:12px;justify-content:flex-end}
      .drop-menu{display:none!important;position:static;left:auto;top:auto;max-width:none;min-width:0;width:100%;box-shadow:none;border:0;border-top:1px solid #e9e5db;border-radius:0;background:#fbfaf8;padding:5px 8px 13px}
      .primary-item.is-open>.drop-menu{display:block!important}
      .drop-menu a,.drop-menu button{font-size:14px;padding:12px 15px;white-space:normal}
      .drop-menu .subline{white-space:nowrap}
      .mobile-toggle{display:flex}
      .join{display:none}
      .join-mobile{display:block!important;margin:16px 4px 0;background:#f5ae42!important;text-align:center;padding:14px!important;font-weight:800!important;border-radius:999px;color:#152243!important;font-size:14px!important}
      .worker-mobile{display:flex!important;align-items:center;justify-content:center;gap:9px;margin:18px 4px 0;border:1px solid #34425d;border-radius:999px;padding:13px;font-size:14px;font-weight:750;background:#fff;color:#152243}
      .actions{gap:9px}.worker-login{font-size:12px;padding:9px 12px;min-height:39px}
    }
    @media(max-width:480px){.inner{padding:10px 14px;gap:10px;min-height:72px}.brand{min-width:0}.brand img{width:94px}.brand small{font-size:6.9px;letter-spacing:1.55px}.worker-login{font-size:10.5px;gap:5px;padding:9px 10px}.worker-login svg{width:14px;height:14px}.mobile-toggle{min-height:38px;padding:8px 10px}}
    @media(max-width:350px){.worker-login{font-size:0;padding:10px}.worker-login svg{width:18px;height:18px}.mobile-toggle{font-size:10px}}
    @media(prefers-reduced-motion:reduce){*,*::before,*::after{scroll-behavior:auto!important;transition:none!important}}
  `;
  const footerCSS=`
  :host{display:block;clear:both;font:400 14px/1.6 Inter,'Segoe UI',Arial,sans-serif;color:#edf0f5}
  *,*::before,*::after{box-sizing:border-box}a{text-decoration:none;color:inherit}
  .foot{background:linear-gradient(155deg,#101a36 0%,#111b37 65%,#19264a 100%);color:#e5e9f1;border-top:3px solid #c38a37}
  .wrap{max-width:1230px;margin:auto;padding:58px 30px 22px}
  .cols{display:grid;grid-template-columns:1.32fr 1fr 1fr;gap:clamp(35px,6vw,100px)}
  .logo{display:block;width:127px;height:auto;object-fit:contain}
  .tag{font-weight:800;font-size:10px;letter-spacing:2.4px;color:#efa936;margin-top:9px}
  .brand-copy{max-width:350px;font-size:13px;line-height:1.85;color:#c5cde0;margin-top:18px}
  h2{font-size:15px;font-weight:700;margin:2px 0 19px;color:#f5bc69;line-height:1.5}
  p{margin:0 0 11px;font-size:13px;line-height:1.8;color:#c5cde0}
  .links{display:grid;grid-template-columns:1fr 1fr;column-gap:20px;row-gap:10px}
  .links a,.contact a{font-size:13px;line-height:1.6;color:#d4dae8;transition:color .2s}
  .links a:hover,.contact a:hover{color:#f7bc61;text-decoration:underline;text-underline-offset:4px}
  .contact .contact-button{display:inline-flex;gap:8px;align-items:center;border:1px solid #aeb8c866;padding:10px 16px;border-radius:999px;margin-top:15px}
  .contact-methods{display:grid;gap:12px;margin:13px 0 4px}
  .contact-method{display:grid;gap:2px;min-width:0}
  .contact-method .mail-label{display:block;color:#f5bc69;font-size:11px;font-weight:700;letter-spacing:.35px}
  .contact-method a{display:inline-block;font-size:13px;color:#e1e8f5;overflow-wrap:anywhere;word-break:normal}
  .contact-method a:hover,.contact-method a:focus-visible{color:#f5bc69;text-decoration:underline;text-underline-offset:3px}
  .tiny{color:#a4afc6;font-size:11px;line-height:1.6;margin-top:13px}
  .bottom{margin-top:49px;padding-top:19px;border-top:1px solid #52617e69;display:flex;justify-content:space-between;gap:15px;flex-wrap:wrap;color:#afbbcf;font-size:11px;letter-spacing:.2px}
  .bottom span{max-width:750px}
  :focus-visible{outline:3px solid #edae4b;outline-offset:5px}
  @media(max-width:800px){.cols{grid-template-columns:1fr 1fr;gap:30px}.cols>div:first-child{grid-column:1 / -1}.wrap{padding:46px 24px 20px}}
  @media(max-width:540px){.cols{grid-template-columns:1fr;gap:28px}.cols>div:first-child{grid-column:auto}.links{column-gap:10px}.wrap{padding:38px 19px 18px}.bottom{margin-top:33px}.brand-copy{margin-top:12px}}
  `;
  const submenuMap={
    'For Contractors':[
      ['Contractor Overview','for-contractors.html'],
      ['Contractor Support','contractor-support.html'],
      ['Worker Login','WORKER_LOGIN']
    ],
    'Our Services':[
      ['Umbrella PAYE','our-services.html#umbrella'],
      ['CIS Payroll','our-services.html#cis'],
      ['PAYE Bureau','our-services.html#bureau'],
      ['Sole Trader / Limited Company','our-services.html#sole-trader-limited'],
      ['International Payroll','our-services.html#international']
    ],
    'Knowledge Hub':[
      ['Help & FAQs','knowledge-hub.html#faqs'],
      ['Tools & Calculators','knowledge-hub.html#tools'],
      ['News & Insights','knowledge-hub.html#insights'],
      ['Guides & Resources','knowledge-hub.html#resources']
    ],
    'About EOS':[
      ['About Us','about-eos.html'],
      ['Meet the Team','about-eos.html#meet-the-team'],
      ['Our Partners','partners.html'],
      ['Charity','charity.html'],
      ['EOS Padel Tour','padel-tour.html']
    ]
  };
  const chevronSvg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="m5 9 7 7 7-7"/></svg>';
  const loginSvg='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3.5" width="12" height="17" rx="2"/><path d="M11 12h10m-4-4 4 4-4 4"/></svg>';
  // Do not guess a Finity URL. Add the verified worker-portal URL when supplied.
  const FINITY_WORKER_LOGIN_URL='';
  class SiteHeader extends HTMLElement {
    connectedCallback(){
      if(this.shadowRoot)return;
      const root=this.attachShadow({mode:'open'});
      const submenu=(name,submenuId)=>{
        const rows=submenuMap[name];if(!rows)return '';
        const list=rows.map(([label,url,note])=>url==='WORKER_LOGIN'
          ? (FINITY_WORKER_LOGIN_URL
              ? `<a href="${esc(FINITY_WORKER_LOGIN_URL)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span class="subline">Finity ↗</span></a>`
              : `<button class="worker-trigger" type="button">${esc(label)} <span class="subline">Finity ↗</span></button>`)
          : `<a href="${url}">${esc(label)}${note?` <span class="subline">${esc(note)}</span>`:''}</a>`).join('');
        return `<div class="drop-menu" id="${submenuId}" aria-label="${esc(name)} submenu" hidden>${list}</div>`;
      };
      const items=nav.map(([name,url],index)=>{
        const has=!!submenuMap[name];
        const submenuId=`eos-submenu-${index}`;
        const currentAttr=url===current?' aria-current="page"':'';
        return `<div class="primary-item" ${has?'data-dropdown="true"':''}><a class="primary-link" href="${url}"${currentAttr}>${esc(name)}</a>${has?`<button type="button" class="drop-toggle" aria-expanded="false" aria-controls="${submenuId}" aria-label="Toggle ${esc(name)} submenu">${chevronSvg}</button>${submenu(name,submenuId)}`:''}</div>`;
      }).join('');
      const login=FINITY_WORKER_LOGIN_URL
        ? `<a class="worker-login" href="${FINITY_WORKER_LOGIN_URL}" target="_blank" rel="noopener noreferrer">${loginSvg}Worker Login</a>`
        : `<button class="worker-login worker-trigger" type="button" aria-label="Worker Login — portal link pending">${loginSvg}Worker Login</button>`;
      const mobileWorkerLogin=FINITY_WORKER_LOGIN_URL
        ? `<a class="worker-mobile" href="${esc(FINITY_WORKER_LOGIN_URL)}" target="_blank" rel="noopener noreferrer">${loginSvg}Worker Login</a>`
        : `<button type="button" class="worker-mobile worker-trigger">${loginSvg}Worker Login</button>`;
      const mainTarget=document.getElementById('main-content');
      const skipLink=mainTarget?'<a class="skip-link" href="#main-content">Skip to main content</a>':'';
      root.innerHTML=`<style>${headerCSS}</style>${skipLink}<header class="bar"><div class="inner"><a class="brand" href="home.html" aria-label="EOS homepage"><img src="../assets/eos-logo-official.png" alt="EOS"><small>PROGRESS. TOGETHER.</small></a><nav id="eos-primary-navigation" aria-label="EOS main navigation">${items}${mobileWorkerLogin}<a class="join-mobile" href="join-us.html">Join Us ↗</a></nav><div class="actions">${login}<a class="join" href="join-us.html" ${current==='join-us.html'?'aria-current="page"':''}>Join Us ↗</a><button class="mobile-toggle" type="button" aria-expanded="false" aria-controls="eos-primary-navigation" aria-label="Open website navigation">MENU <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg></button></div><div class="status" id="eos-worker-login-status" role="status" aria-live="polite" hidden>Worker Login will open the official Finity portal once the EOS-specific URL has been confirmed.</div></div></header>`;
      const menu=root.querySelector('nav');
      const toggle=root.querySelector('.mobile-toggle');
      const status=root.querySelector('.status');
      const dropdowns=[...root.querySelectorAll('.primary-item[data-dropdown]')];
      const desktopQuery=window.matchMedia('(min-width:1221px)');
      let lastDropdownToggle=null;
      let statusTrigger=null;
      const isVisible=element=>!!element&&element.getClientRects().length>0;
      const focusVisible=(element,fallback)=>{
        const target=isVisible(element)?element:(isVisible(fallback)?fallback:null);
        if(target)target.focus({preventScroll:true});
      };
      const closeStatus=()=>{
        status.hidden=true;
        if(statusTrigger)statusTrigger.setAttribute('aria-expanded','false');
        statusTrigger=null;
      };
      const setDropdownState=(item,open)=>{
        item.classList.toggle('is-open',open);
        item.querySelector('.drop-toggle').setAttribute('aria-expanded',String(open));
        item.querySelector('.drop-menu').hidden=!open;
      };
      const closeDropdown=(item,{restoreFocus=false,suppressFocus=false}={})=>{
        const panel=item.querySelector('.drop-menu');
        const trigger=item.querySelector('.drop-toggle');
        const containsFocus=panel.contains(root.activeElement);
        setDropdownState(item,false);
        if(!suppressFocus&&(restoreFocus||containsFocus))focusVisible(trigger,toggle);
      };
      const closeDropdowns=(except=null,options={})=>{
        dropdowns.forEach(item=>{if(item!==except)closeDropdown(item,options);});
      };
      const closeMenu=({restoreFocus=false,suppressFocus=false}={})=>{
        const active=root.activeElement;
        const insideMenu=menu.contains(active);
        const focusedDropdown=active&&active.closest('.primary-item[data-dropdown]');
        const insidePanel=focusedDropdown&&focusedDropdown.querySelector('.drop-menu').contains(active);
        closeDropdowns(null,{suppressFocus:true});
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded','false');
        toggle.setAttribute('aria-label','Open website navigation');
        if(suppressFocus)return;
        if(!desktopQuery.matches&&(restoreFocus||insideMenu))focusVisible(toggle,root.querySelector('.brand'));
        else if(desktopQuery.matches&&insidePanel)focusVisible(focusedDropdown.querySelector('.drop-toggle'),root.querySelector('.brand'));
      };
      const openDropdown=item=>{
        closeDropdowns(item);
        setDropdownState(item,true);
        lastDropdownToggle=item.querySelector('.drop-toggle');
        closeStatus();
      };
      dropdowns.forEach(item=>{
        const trigger=item.querySelector('.drop-toggle');
        trigger.addEventListener('click',()=>{
          if(item.classList.contains('is-open'))closeDropdown(item);
          else openDropdown(item);
        });
        item.addEventListener('mouseenter',()=>{
          if(!desktopQuery.matches)return;
          const focusedPanel=dropdowns.find(other=>other!==item&&other.querySelector('.drop-menu').contains(root.activeElement));
          if(!focusedPanel)openDropdown(item);
        });
        item.addEventListener('mouseleave',()=>{
          if(desktopQuery.matches&&!item.contains(root.activeElement))closeDropdown(item);
        });
        item.addEventListener('focusout',()=>queueMicrotask(()=>{
          if(!item.contains(root.activeElement))closeDropdown(item);
        }));
      });
      toggle.addEventListener('click',()=>{
        if(menu.classList.contains('open')){
          closeMenu({restoreFocus:true});
        }else{
          menu.classList.add('open');
          toggle.setAttribute('aria-expanded','true');
          toggle.setAttribute('aria-label','Close website navigation');
          closeStatus();
          focusVisible(menu.querySelector('.primary-link'),toggle);
        }
      });
      root.querySelectorAll('.worker-trigger').forEach(trigger=>{
        trigger.setAttribute('aria-controls','eos-worker-login-status');
        trigger.setAttribute('aria-expanded','false');
        trigger.addEventListener('click',event=>{
          event.preventDefault();
          const closeCurrent=!status.hidden&&statusTrigger===trigger;
          closeStatus();
          if(!closeCurrent){
            status.hidden=false;
            statusTrigger=trigger;
            trigger.setAttribute('aria-expanded','true');
          }
        });
      });
      root.addEventListener('keydown',event=>{
        if(event.key!=='Escape')return;
        if(!status.hidden){
          const trigger=statusTrigger;
          closeStatus();
          focusVisible(trigger,desktopQuery.matches?root.querySelector('.worker-login'):toggle);
          event.preventDefault();
          return;
        }
        const active=root.activeElement;
        const focusedDropdown=active&&active.closest('.primary-item[data-dropdown].is-open');
        const openDropdowns=dropdowns.filter(item=>item.classList.contains('is-open'));
        if(focusedDropdown||openDropdowns.length){
          const trigger=focusedDropdown?focusedDropdown.querySelector('.drop-toggle'):lastDropdownToggle;
          closeDropdowns(null,{suppressFocus:true});
          focusVisible(trigger,desktopQuery.matches?root.querySelector('.primary-link'):toggle);
          event.preventDefault();
        }else if(!desktopQuery.matches&&menu.classList.contains('open')){
          closeMenu({restoreFocus:true});
          event.preventDefault();
        }
      });
      menu.addEventListener('focusout',()=>queueMicrotask(()=>{
        const active=root.activeElement;
        if(active!==toggle&&!menu.contains(active))closeMenu();
      }));
      root.addEventListener('focusout',()=>queueMicrotask(()=>{
        if(!root.activeElement){closeMenu();closeStatus();}
      }));
      root.querySelectorAll('nav a:not(.worker-trigger),.brand,.join').forEach(link=>link.addEventListener('click',()=>{
        closeMenu();
        closeStatus();
      }));
      document.addEventListener('click',event=>{
        if(!event.composedPath().includes(this)){closeMenu();closeStatus();}
      });
      desktopQuery.addEventListener('change',()=>{
        const active=root.activeElement;
        const item=active&&active.closest('.primary-item');
        let fallback;
        if(desktopQuery.matches){
          if(active&&active.closest('.worker-mobile'))fallback=root.querySelector('.worker-login');
          else if(active&&active.closest('.join-mobile'))fallback=root.querySelector('.join');
          else if(item)fallback=item.querySelector('.drop-toggle')||item.querySelector('.primary-link');
          else fallback=root.querySelector('.primary-link[aria-current="page"]')||root.querySelector('.primary-link');
        }else fallback=toggle;
        closeMenu({suppressFocus:true});
        closeStatus();
        if(active&&!isVisible(active))focusVisible(fallback,root.querySelector('.brand'));
      });
      const skip=root.querySelector('.skip-link');
      if(skip)skip.addEventListener('click',event=>{
        const target=document.getElementById('main-content');
        if(!target)return;
        event.preventDefault();
        closeMenu({suppressFocus:true});
        closeStatus();
        target.focus({preventScroll:true});
        target.scrollIntoView({block:'start',behavior:'auto'});
      });
    }
  }
  class SiteFooter extends HTMLElement {
    connectedCallback(){
      if(this.shadowRoot)return;
      const root=this.attachShadow({mode:'open'});
      const footerLinks=[['For Contractors','for-contractors.html'],['Recruitment Agencies','recruitment-agencies.html'],['Our Services','our-services.html'],['Knowledge Hub','knowledge-hub.html'],['Contractor Support','contractor-support.html'],['About EOS','about-eos.html'],['Our Partners','partners.html'],['Our Charity','charity.html'],['Padel Tour','padel-tour.html'],['Join Us','join-us.html']].map(([name,url])=>`<a href="${url}">${esc(name)}</a>`).join('');
      root.innerHTML=`<style>${footerCSS}</style><footer class="foot"><div class="wrap"><div class="cols"><div><a href="home.html" aria-label="EOS homepage"><img class="logo" src="../assets/eos-logo-official-reversed.png" alt="EOS"></a><div class="tag">PROGRESS. TOGETHER.</div><p class="brand-copy">Built to raise the standard. Combining clearer processes, considered compliance and meaningful partnerships to improve the experience of contracting.</p></div><div class="contact"><h2>Let's talk</h2><p>Whether you're a contractor, recruitment agency or business, we're here to help you find the right next step.</p><div class="contact-methods"><div class="contact-method"><span class="mail-label">General enquiries</span><a href="mailto:hello@eospayroll.co.uk">hello@eospayroll.co.uk</a></div><div class="contact-method"><span class="mail-label">Contractor &amp; customer support</span><a href="mailto:support@eospayroll.co.uk">support@eospayroll.co.uk</a></div><div class="contact-method"><span class="mail-label">Birmingham office</span><span style="color:#e1e8f5;font-size:13px;line-height:1.7">The Colmore Building<br>20 Colmore Circus, Queensway<br>Birmingham, B4 6AT</span></div></div><a class="contact-button" href="contact-us.html">Contact EOS <span aria-hidden="true">↗</span></a><div class="tiny">Mailbox activation, public telephone and completion of registered-office change to confirm before launch.</div></div><div><h2>Explore EOS</h2><div class="links">${footerLinks}</div></div></div><div class="bottom"><span>© 2026 EOS · Progress. Together.</span><span>Website design review only · Legal links, contact details and integrations pending confirmation</span></div></div></footer>`;
    }
  }
  if(!customElements.get('eos-site-header'))customElements.define('eos-site-header',SiteHeader);
  if(!customElements.get('eos-site-footer'))customElements.define('eos-site-footer',SiteFooter);
})();
