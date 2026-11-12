import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  icon: string;
  shortDesc: string;
  pricingTag: string;
  deliverables: string[];
  popular?: boolean;
}

interface GalleryProject {
  id: string;
  title: string;
  category: 'bathrooms' | 'living' | 'kitchen' | 'terrace' | 'commercial';
  location: string;
  tileType: string;
  size: string;
  description: string;
  tag: string;
}

interface FaqItem {
  question: string;
  answer: string;
  open: boolean;
}

interface TestimonialItem {
  stars: string;
  text: string;
  author: string;
  project: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Business Profile Info
  readonly businessName = 'Ramya Tiles Work Contractor';
  readonly phone = '+919840738347';
  readonly displayPhone = '+91 98407 38347';
  readonly whatsappNumber = '919789001872';
  readonly displayWhatsApp = '+91 97890 01872';
  readonly serviceLocation = 'Chennai, Tamil Nadu (All Areas Covered)';
  readonly email = 'contact@ramyatiles.com';

  // Language State: 'en' (English) or 'ta' (Tamil)
  currentLang: 'en' | 'ta' = 'en';

  toggleLanguage(): void {
    this.currentLang = this.currentLang === 'en' ? 'ta' : 'en';
  }

  setLanguage(lang: 'en' | 'ta'): void {
    this.currentLang = lang;
  }

  // Navigation State
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  // Active Gallery Filter Tab
  activeGalleryTab: 'all' | 'bathrooms' | 'living' | 'kitchen' | 'terrace' | 'commercial' = 'all';

  setGalleryTab(tab: 'all' | 'bathrooms' | 'living' | 'kitchen' | 'terrace' | 'commercial'): void {
    this.activeGalleryTab = tab;
  }

  // Localized UI Translations
  get t() {
    if (this.currentLang === 'ta') {
      return {
        topBarText: 'சென்னையில் 25+ வருடங்கள் நம்பகமான டைல்ஸ் பதிக்கும் அனுபவம் • நேரடி ஒப்பந்தக்காரர்',
        directBadge: 'நேரடி மேஸ்திரி • புரோக்கர் இல்லை',
        brandName: 'ரம்யா டைல்ஸ்',
        brandSub: 'டைல்ஸ் ஒட்டும் மேஸ்திரி • 25+ வருட அனுபவம்',
        navServices: 'சேவைகள்',
        navExperience: '25+ வருட அனுபவம்',
        navWork: 'செய்த வேலைகள்',
        navWhyUs: 'ஏன் எங்களை தேர்வு செய்ய வேண்டும்?',
        navFaq: 'கேள்வி பதில்',
        navContact: 'இடப்பார்வை முன்பதிவு',
        btnCall: 'அழைக்க',
        btnWhatsapp: 'வாட்ஸ்அப்',
        langBtnLabel: 'English',
        langCurrentBadge: 'தமிழ்',

        // Hero
        heroBadge: '🏆 சென்னையில் 25+ வருட தலைசிறந்த அனுபவம்',
        heroHeadline: 'வீடு மற்றும் வணிக வளாகங்களுக்கு நேர்த்தியான டைல்ஸ் பதிக்கும் பணிகள்',
        heroDesc: 'புதிய தரை டைல்ஸ், பாத்ரூம் முழு புதுப்பித்தல், கிச்சன் டைல்ஸ், மாடி வெப்பம் தணிக்கும் கூலிங் டைல்ஸ். லேசர் மட்டம் மற்றும் துல்லியமான தண்ணீர் சரிவுடன் 25 வருட அனுபவமிக்க மேஸ்திரியின் நேரடி மேற்பார்வையில் சிறந்த தரம்!',
        check1: 'உள்ளீடற்ற பொள்ளல் சத்தம் இல்லாத வேலை',
        check2: 'தண்ணீர் தேங்காத துல்லியமான சரிவு',
        check3: 'நேரடி மேஸ்திரி • நியாயமான கூலி',
        btnBookVisit: 'இலவச இடப்பார்வை முன்பதிவு',
        btnWhatsappConsult: 'வாட்ஸ்அப் ஆலோசனை',
        statExpVal: '25+',
        statExpLabel: 'வருட அனுபவம்',
        statProjVal: '1,500+',
        statProjLabel: 'முடித்த திட்டங்கள்',
        statTimeVal: '100%',
        statTimeLabel: 'நேரத்திற்கு ஒப்படைப்பு',
        statDirectVal: '0',
        statDirectLabel: 'புரோக்கர் கமிஷன் இல்லை',

        // Hero Card
        expCardBadge: '25+ வருட அனுபவம்',
        expCardTitle: 'கைதேர்ந்த கைவினைத் தரம்',
        expCardQuote: '"ஒவ்வொரு டைல்ஸும் முழு ஈடுபாட்டுடன், லேசர் மட்டம் பார்த்து, பல தலைமுறைகளுக்கு உறுதியாக இருக்கும்படி பதிக்கப்படும்."',
        expCardPills: ['விட்ரிஃபைட் 2x4 & 4x6', 'பாத்ரூம் புதுப்பித்தல்', 'எப்பாக்ஸி க்ரௌட்டிங்', 'மாடி கூல் டைல்ஸ்', 'பெரிய ஸ்லாப்கள்'],
        expCardDirectTitle: 'நேரடி மேஸ்திரி தொடர்பு',
        expCardDirectSub: 'சென்னை & புறநகர் பகுதிகள் முழுவதும்',

        // Experience Section
        expTag: 'மேஸ்திரியின் நிபுணத்துவம்',
        expTitle: '25+ வருட நேரடி அனுபவம் ஏன் மிக முக்கியம்?',
        expSubtitle: 'டைல்ஸ் பதிப்பது வெறும் கல் ஒட்டும் வேலை அல்ல. அனுபவம் குறைந்த கூலி ஆட்களிடம் கொடுத்தால் டைல்ஸ் பொள்ளல் விடும், தண்ணீர் தேங்கும், கீழ்தளத்தில் நீர் கசியும். எங்கள் 25 வருட அனுபவம் தரும் நன்மைகள்:',
        feat1Icon: '📐',
        feat1Title: 'லேசர் மட்டம் & பொள்ளல் சத்தம் இல்லாத வேலை',
        feat1Desc: 'ஒவ்வொரு டைல்ஸின் அடியிலும் முழுமையாக சிமெண்ட் படுக்கை அமைத்து, லேசர் கருவி கொண்டு மட்டம் சரிபார்க்கிறோம். எந்த இடத்திலும் தட்டினால் பொள்ளல் சத்தம் வராது.',
        feat1Badge: '✓ 100% உறுதியான சிமெண்ட் பிணைப்பு',

        feat2Icon: '🌊',
        feat2Desc: 'பாத்ரூம் மற்றும் பால்கனிகளில் தண்ணீர் தேங்கினால் பாசி பிடித்து வழக்கும். மில்லிமீட்டர் அளவில் சரியான சரிவு வைத்து தண்ணீர் உடனே வெளியேற செய்கிறோம்.',
        feat2Title: 'தண்ணீர் தேங்காத துல்லியமான சரிவு',
        feat2Badge: '✓ தண்ணீர் தேங்காது',

        feat3Icon: '✂️',
        feat3Title: 'துல்லியமான 45° மூலை வெட்டு (மிட்டர் கட்டிங்)',
        feat3Desc: 'படி ஓரங்கள், சுவரின் மூலைகள் மற்றும் ஜன்னல் முனைகளில் அசிங்கமான பிளாஸ்டிக் பீடிங் இல்லாமல், டைல்ஸை 45 டிகிரியில் நேர்த்தியாக வெட்டி இணைக்கிறோம்.',
        feat3Badge: '✓ பிரீமியம் அழகு & ஃபினிஷிங்',

        feat4Icon: '🛡️',
        feat4Title: 'இரட்டை வாட்டர்ப்ரூஃபிங் & எப்பாக்ஸி க்ரௌட்டிங்',
        feat4Desc: 'பாத்ரூம் தளங்களில் 2 அடுக்கு ரசாயன வாட்டர்ப்ரூஃபிங் செய்த பின்னரே டைல்ஸ் பதிக்கிறோம். பின்னர் கறை படியாத, நீர் கசியாத எப்பாக்ஸி கொண்டு இடைவெளியை நிரப்புகிறோம்.',
        feat4Badge: '✓ ஆயுள் முழுக்க நீர் கசிவு இல்லை',

        compBadTitle: '❌ அனுபவமற்ற தினக்கூலி ஆட்கள்',
        compBadList: [
          'அவசரமாக பதிப்பதால் அடியில் பொள்ளல் மற்றும் காற்று இடைவெளி',
          'ஒரு டைல்ஸ் ஏத்தி இறக்கி இருப்பதால் கால் தடுக்கி விழும் நிலை',
          'பாத்ரூமில் தண்ணீர் தேங்கி எந்நேரமும் ஈரப்பதம் மற்றும் பாசி',
          '3 மாதத்தில் கறுத்து உதிரும் சாதாரண வெள்ளை சிமெண்ட் பூச்சு',
          'பணம் வாங்கியவுடன் வேலைக்கு எந்த பொறுப்பும் ஏற்க மாட்டார்கள்'
        ],
        compGoodTitle: '✅ ரம்யா டைல்ஸ் கான்ட்ராக்டர் (25+ வருட அனுபவம்)',
        compGoodList: [
          'முழு சிமெண்ட் படுக்கை - ஒரு இடத்திலும் பொள்ளல் சத்தம் இருக்காது',
          'லேசர் மட்டம் மூலம் காலில் தட்டாத பட்டுப் போன்ற மென்மையான தரை',
          'இயற்கையான வடிகால் சரிவு - தண்ணீர் ஊற்றினால் உடனே வடிந்துவிடும்',
          '10 வருடங்களுக்கு நிறம் மாறாத நீர்புகா ரெசின் எப்பாக்ஸி க்ரௌட்டிங்',
          'நேரடி மேஸ்திரியின் நேரடி மேற்பார்வை மற்றும் உத்தரவாதமான வேலை'
        ],

        // Services
        servicesTag: 'அனைத்து டைல்ஸ் வேலைகள்',
        servicesTitle: 'எங்களின் விரிவான டைல்ஸ் பணிகள்',
        servicesSubtitle: 'புதிய வீடுகள், பாத்ரூம் புதுப்பித்தல், உடைந்துபோன டைல்ஸ் மாற்றுதல் என அனைத்து டைல்ஸ் வேலைகளையும் பொறுப்புடன் செய்கிறோம்.',
        delivTitle: 'நாங்கள் தரும் சிறப்பு அம்சங்கள்:',
        btnAskQuote: 'கட்டண விபரம் கேட்க',

        // Gallery
        galleryTag: 'எங்கள் வேலைப்பாடு',
        galleryTitle: 'சமீபத்தில் முடித்த டைல்ஸ் திட்டங்கள்',
        gallerySubtitle: 'சென்னை முழுவதும் நேர்த்தியான முறையில் முடிக்கப்பட்ட எங்களின் சில முக்கிய திட்டங்கள்:',
        tabAll: 'அனைத்தும்',
        tabLiving: 'ஹால் & அறைகள்',
        tabBath: 'பாத்ரூம்',
        tabKitchen: 'கிச்சன்',
        tabTerrace: 'மாடி கூலிங்',
        tabCommercial: 'பார்க்கிங் & கடைகள்',
        tileSpecLabel: 'டைல்ஸ் விபரம்:',
        projSizeLabel: 'பரப்பளவு:',
        enquireSimilar: 'இதேபோல் வேலைக்கு கேட்க',

        // Process
        processTag: 'வெளிப்படையான பணிமுறை',
        processTitle: 'நாங்கள் வேலை செய்யும் 4 எளிய முறைகள்',
        processSubtitle: 'அளவீடு முதல் வேலை முடித்து ஒப்படைப்பது வரை எந்தவித மறைமுக கட்டணமும் இல்லாத தெளிவான சேவை.',
        step1Num: '01',
        step1Title: 'நேரடி பார்வை & லேசர் அளவீடு',
        step1Desc: 'உங்கள் இடத்திற்கு நேரடியாக வந்து, தரை மட்டத்தை ஆய்வு செய்து, சரியான சதுர அடியை அளந்து டைல்ஸ் வீணாகாமல் திட்டமிடுவோம்.',
        step2Num: '02',
        step2Title: 'தெளிவான நிலையான மதிப்பீடு',
        step2Desc: 'கூலி விபரம், சிமெண்ட்/மணல்/அட்ஹெசிவ் தேவை மற்றும் வேலை முடியும் நாட்கள் ஆகியவற்றை வெளிப்படையாக தெரிவிப்போம்.',
        step3Num: '03',
        step3Title: 'நேர்த்தியான அனுபவமிக்க வேலைப்பாடு',
        step3Desc: 'லேசர் மட்டம், சரியான சரிவு மற்றும் சீரான இடைவெளியுடன் எங்கள் அனுபவமிக்க குழுவினர் அமைதியாக, சுத்தமாக வேலை செய்வார்கள்.',
        step4Num: '04',
        step4Title: 'எப்பாக்ஸி க்ரௌட்டிங் & சுத்தம் செய்து ஒப்படைப்பு',
        step4Desc: 'வாட்டர்ப்ரூஃப் எப்பாக்ஸி பூசி, முழு தரை மற்றும் சுவரை இயந்திரம் கொண்டு சுத்தம் செய்து உங்கள் கைகளில் நேர்த்தியாக ஒப்படைப்போம்.',

        // Testimonials
        testTag: 'வாடிக்கையாளர் கருத்துகள்',
        testTitle: 'சென்னை வாடிக்கையாளர்கள் சொல்வது என்ன?',
        testSubtitle: '25 வருடங்களுக்கும் மேலாக எங்களை நம்பும் சென்னை குடும்பங்களின் அனுபவம்:',

        // FAQ
        faqTag: 'சந்தேகங்கள் & பதில்கள்',
        faqTitle: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
        faqSubtitle: 'டைல்ஸ் பதிப்பது மற்றும் புதுப்பிப்பது பற்றிய உங்கள் பொதுவான சந்தேகங்களுக்கான தெளிவான பதில்கள்:',

        // Contact
        contactTag: 'தொடர்புக்கு',
        contactTitle: 'இலவச இடப்பார்வை & ஆலோசனைக்கு அழைக்கவும்',
        contactDesc: 'எங்கள் தலைமை மேஸ்திரியிடம் நேரடியாக பேசுங்கள். சென்னை முழுவதும் உங்கள் இடத்திற்கு இலவசமாக வந்து ஆய்வு செய்து சரியான மதிப்பீடு தருகிறோம்.',
        contactCallLabel: 'நேரடி அழைப்பு',
        contactWhatsappLabel: 'வாட்ஸ்அப் விரைவு அரட்டை',
        contactLocationLabel: 'பணி செய்யும் பகுதி',
        contactLocationVal: 'சென்னை & புறநகர் பகுதிகள் (தமிழ்நாடு)',
        guaranteeTitle: '100% வேலைப்பாடு மற்றும் சரிவு உத்தரவாதம்',
        guaranteeSub: 'நேரடி மேஸ்திரியின் பொறுப்புணர்வுடன் கூடிய வேலை.',

        // Form
        formTitle: 'உங்கள் வேலை விபரங்களை அனுப்பவும்',
        formSubtitle: 'விபரங்களை பூர்த்தி செய்து உடனே வாட்ஸ்அப் மூலம் மேஸ்திரியிடம் பேசலாம்:',
        formName: 'உங்கள் பெயர் *',
        formPhone: 'அலைபேசி எண் *',
        formLocation: 'சென்னையில் உங்கள் பகுதி',
        formArea: 'சுமார் பரப்பளவு (சதுர அடி)',
        formService: 'தேவைப்படும் வேலை',
        formNotes: 'கூடுதல் குறிப்புகள் (ஏற்கனவே டைல்ஸ் வாங்கிவிட்டீர்களா, பழைய டைல்ஸ் இடிக்க வேண்டுமா போன்றவை)',
        formSubmitBtn: 'வாட்ஸ்அப் மூலம் மேஸ்திரியிடம் பேச',

        // Footer
        footerDesc: 'சென்னையில் 25+ வருடங்கள் நேரடி அனுபவம் கொண்ட தலைமை டைல்ஸ் மேஸ்திரி. வீடு, அடுக்குமாடி மற்றும் வணிக வளாகங்களுக்கான நேர்த்தியான வேலைப்பாடு.',
        footerServicesHeading: 'எங்கள் சேவைகள்',
        footerCoverageHeading: 'சேவை பகுதிகள்',
        footerBottomText: '© 2026 ரம்யா டைல்ஸ் ஒர்க் கான்ட்ராக்டர். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. 25+ வருட அனுபவ கைவினைத்திறன்.',
        footerContractorBadge: 'தலைமை டைல்ஸ் மேஸ்திரி • சென்னை, தமிழ்நாடு',
        floatingWhatsappText: 'வாட்ஸ்அப் தொடர்பு'
      };
    }

    // Default English
    return {
      topBarText: 'Over 25+ Years of Trusted Tile Laying & Renovation Experience in Chennai • Direct Contractor',
      directBadge: 'Direct Contractor • No Middlemen',
      brandName: 'RAMYA TILES',
      brandSub: 'WORK CONTRACTOR • 25+ YRS EXP',
      navServices: 'Services',
      navExperience: '25+ Yrs Experience',
      navWork: 'Our Work',
      navWhyUs: 'Why Choose Us',
      navFaq: 'FAQs',
      navContact: 'Book Site Visit',
      btnCall: 'Call Now',
      btnWhatsapp: 'WhatsApp Quote',
      langBtnLabel: 'தமிழ்',
      langCurrentBadge: 'EN',

      // Hero
      heroBadge: '🏆 25+ Years of Master Tile Craftsmanship in Chennai',
      heroHeadline: 'Flawless Tile Laying, Renovation & Alteration Works',
      heroDesc: 'Specialist tile contractor undertaking new floor tiling, complete bathroom renovations, kitchen wall claddings, and terrace cooling tiles across Chennai. Direct contractor rates with laser-level precision and zero hollow tiles.',
      check1: 'Zero-Hollow Sound Guarantee',
      check2: 'Perfect Water Slope & Drainage',
      check3: 'Direct Contractor • Honest Rates',
      btnBookVisit: 'Book Free Site Visit',
      btnWhatsappConsult: 'WhatsApp Consultation',
      statExpVal: '25+',
      statExpLabel: 'Years of Experience',
      statProjVal: '1,500+',
      statProjLabel: 'Projects Completed',
      statTimeVal: '100%',
      statTimeLabel: 'On-Time Handover',
      statDirectVal: '0',
      statDirectLabel: 'Broker Commission',

      // Hero Card
      expCardBadge: '25+ Years in Field',
      expCardTitle: 'Master Artisan Quality',
      expCardQuote: '"Every tile is laid with personal care, level checks, and strong bonding so your floors remain rock-solid for decades."',
      expCardPills: ['Vitrified 2x4 & 4x6', 'Bathroom Renovations', 'Epoxy Grouting', 'Terrace Cool Tiles', 'Large Format Slabs'],
      expCardDirectTitle: 'Direct Contractor Contact',
      expCardDirectSub: 'Serving All Chennai & Suburbs',

      // Experience Section
      expTag: 'Master Contractor Expertise',
      expTitle: 'Why 25+ Years of Hands-on Experience Matters',
      expSubtitle: 'Tiling is not just sticking tiles with cement. Without experienced craftsmanship, tiles crack, sound hollow, leak into lower floors, and hold standing water. Here is what 25+ years of trade mastery guarantees:',
      feat1Icon: '📐',
      feat1Title: 'Laser-Level Flatness & Zero Hollow Spots',
      feat1Desc: 'We use high-precision cross-line laser levels and compact the mortar bed 100% underneath every tile, ensuring no hollow-knock sounds or cracking under heavy furniture.',
      feat1Badge: '✓ 100% Solid Mortar Bedding',

      feat2Icon: '🌊',
      feat2Title: 'Engineered Water Slope & Drainage',
      feat2Desc: 'Bathrooms and balconies require calculated millimeter slopes towards the drain trap. We guarantee zero standing water puddles, preventing slippery floors and mildew formation.',
      feat2Badge: '✓ Zero Water Stagnation',

      feat3Icon: '✂️',
      feat3Title: 'Precision 45° Miter Edge Cuts',
      feat3Desc: 'For staircase step edges, wall corners, and window sills, we do specialized 45-degree chamfer miter cuts that look elegant and eliminate ugly plastic corner trims.',
      feat3Badge: '✓ Luxury Architectural Finish',

      feat4Icon: '🛡️',
      feat4Title: 'Double Waterproofing & Epoxy Grouting',
      feat4Desc: 'We apply industrial waterproof elastomer membranes on bathroom floors before tiling, followed by chemical-resistant epoxy grout that never discolors or lets water seep through.',
      feat4Badge: '✓ Lifetime Seepage Protection',

      compBadTitle: '❌ Inexperienced Daily-Wage Masons',
      compBadList: [
        'Hasty laying leaving hollow air pockets underneath',
        'Uneven tile lippage (edges tripping your feet)',
        'Poor bathroom slope leaving water puddles',
        'Normal white cement joints that turn black in 3 months',
        'No accountability once payment is collected'
      ],
      compGoodTitle: '✅ Ramya Tiles Work Contractor (25+ Yrs)',
      compGoodList: [
        'Full mortar buttering with zero hollow sounds',
        'Laser leveling for silky smooth transition between tiles',
        'Perfect natural drainage slopes directly to outlets',
        'Epoxy resin grouting that stays clean for 10+ years',
        'Direct contractor on-site oversight and quality guarantee'
      ],

      // Services
      servicesTag: 'All Tiling Solutions',
      servicesTitle: 'Comprehensive Tiling & Renovation Services',
      servicesSubtitle: 'From new apartment floors to complete bathroom renovations and delicate alteration repairs — we undertake all residential and commercial tile works. Pricing is tailored case-by-case based on tile size, site condition & design.',
      delivTitle: 'What We Deliver:',
      btnAskQuote: 'Ask for Free Quote',

      // Gallery
      galleryTag: 'Our Craftsmanship',
      galleryTitle: 'Recent Tile Work Portfolio',
      gallerySubtitle: 'A glimpse of completed residential and commercial tile projects executed with meticulous alignment, clean corners, and premium grouting across Chennai.',
      tabAll: 'All Works',
      tabLiving: 'Living & Halls',
      tabBath: 'Bathrooms',
      tabKitchen: 'Kitchens',
      tabTerrace: 'Terrace Cooling',
      tabCommercial: 'Commercial & Parking',
      tileSpecLabel: 'Tile Spec:',
      projSizeLabel: 'Project Size:',
      enquireSimilar: 'Enquire Similar Project',

      // Process
      processTag: 'Smooth & Transparent',
      processTitle: 'How We Complete Your Tile Project',
      processSubtitle: 'Simple 4-step workflow ensuring zero surprises, accurate material estimates, and on-time completion.',
      step1Num: '01',
      step1Title: 'Site Visit & Laser Measurement',
      step1Desc: 'We visit your site in Chennai, check the existing floor level, inspect plumbing points, and measure exact square footage to avoid tile wastage.',
      step2Num: '02',
      step2Title: 'Transparent Fixed Quote',
      step2Desc: 'You receive a clear breakdown of labor charges, adhesive/sand requirements, and timeline. No hidden extras or surprise rate increases.',
      step3Num: '03',
      step3Title: 'Master Artisan Execution',
      step3Desc: 'Our experienced craftsmen lay tiles with laser alignment, correct drainage slope, and even spacer joints, keeping the work area neat and orderly.',
      step4Num: '04',
      step4Title: 'Epoxy Grouting & Final Polish',
      step4Desc: 'We finish with waterproof epoxy grouting, clean all tile surfaces thoroughly, conduct joint inspection, and hand over your pristine floor.',

      // Testimonials
      testTag: 'Customer Feedback',
      testTitle: 'What Chennai Homeowners Say',
      testSubtitle: 'Trusted by families, builders, and architects across Chennai for more than 25 years.',

      // FAQ
      faqTag: 'Got Questions?',
      faqTitle: 'Frequently Asked Questions',
      faqSubtitle: 'Clear, honest answers to help you plan your tile installation or remodeling project.',

      // Contact
      contactTag: 'Get In Touch',
      contactTitle: 'Book a Free Site Visit & Consultation',
      contactDesc: 'Speak directly with our master contractor. We will visit your property anywhere in Chennai, inspect your floor condition, and provide an accurate quotation.',
      contactCallLabel: 'Direct Phone Call',
      contactWhatsappLabel: 'WhatsApp Quick Chat',
      contactLocationLabel: 'Operating Location',
      contactLocationVal: 'Chennai & Suburbs (Tamil Nadu)',
      guaranteeTitle: '100% Workmanship & Slope Guarantee',
      guaranteeSub: 'Direct artisan accountability with zero sub-contracting.',

      // Form
      formTitle: 'Send Your Work Details',
      formSubtitle: 'Fill in your details below to instantly connect on WhatsApp:',
      formName: 'Your Name *',
      formPhone: 'Phone Number *',
      formLocation: 'Area / Location in Chennai',
      formArea: 'Approx Area (sq.ft)',
      formService: 'Service Required',
      formNotes: 'Additional Notes / Requirement (e.g. tile size bought, old tile removal needed)',
      formSubmitBtn: 'Connect with Contractor on WhatsApp',

      // Footer
      footerDesc: 'Specialist Tile Laying Contractor in Chennai with over 25+ years of hands-on experience in residential, apartment, and commercial tiling. Master craftsmanship with direct contractor pricing.',
      footerServicesHeading: 'Our Services',
      footerCoverageHeading: 'Coverage in Chennai',
      footerBottomText: '© 2026 Ramya Tiles Work Contractor. All rights reserved. 25+ Years of Craftsmanship Excellence.',
      footerContractorBadge: 'Master Tile Contractor • Chennai, Tamil Nadu',
      floatingWhatsappText: 'Direct WhatsApp Quote'
    };
  }

  // Localized Services
  get services(): ServiceItem[] {
    const isTa = this.currentLang === 'ta';
    return [
      {
        id: 'new-floor',
        title: isTa ? 'புதிய தரை டைல்ஸ் பதித்தல்' : 'New Floor Tile Laying',
        icon: '🏠',
        badge: isTa ? 'அதிக தேவை' : 'High Demand',
        popular: true,
        pricingTag: isTa ? 'விலை விபரம் கேட்க' : 'Ask for Quote',
        shortDesc: isTa
          ? 'விட்ரிஃபைட், செராமிக் மற்றும் 2x4, 4x6 அடி பெரிய ஸ்லாப் டைல்ஸ்களை லேசர் மட்டம் பார்த்து துல்லியமாக பதித்தல்.'
          : 'Vitrified, ceramic, and 2x4 / 4x6 ft large slab tile laying with laser leveling.',
        deliverables: isTa
          ? [
              'தரை தளத்தை சுத்தம் செய்து லேசர் மூலம் மட்டம் பார்த்தல்',
              'பொள்ளல் இல்லாத சீரான முழு சிமெண்ட் படுக்கை',
              'சுவர் ஓரங்களில் நேர்த்தியான ஸ்கர்டிங் மற்றும் பார்டர்',
              'வேலை முடிந்ததும் இயந்திரம் கொண்டு சுத்தம் செய்தல்'
            ]
          : [
              'Floor sub-base cleaning and laser leveling',
              'Even joint spacing with zero hollow spots',
              'Custom edge skirting and border alignment',
              'Final machine cleaning and buffing'
            ]
      },
      {
        id: 'bath-reno',
        title: isTa ? 'பாத்ரூம் முழு புதுப்பித்தல் & வாட்டர்ப்ரூஃபிங்' : 'Bathroom Renovation & Remodel',
        icon: '🚿',
        badge: isTa ? 'சிறப்பு பணி' : 'Specialist',
        popular: true,
        pricingTag: isTa ? 'விலை விபரம் கேட்க' : 'Ask for Quote',
        shortDesc: isTa
          ? 'பழைய டைல்ஸ் அகற்றுதல், இரட்டை வாட்டர்ப்ரூஃபிங் மற்றும் சறுக்காத ஆன்டி-ஸ்கிட் தரை டைல்ஸ் பதிக்கும் முழு வேலை.'
          : 'Complete bathroom overhaul: old tile removal, double chemical waterproofing, and anti-skid safety tiles.',
        deliverables: isTa
          ? [
              '100% நீர் கசியாத ரசாயன வாட்டர்ப்ரூஃபிங் உறை',
              'சறுக்காத ஆன்டி-ஸ்கிட் தரை மற்றும் சரியான வடிகால் சரிவு',
              'மேற்கூரை வரை முழு சுவர் டைல்ஸ் ஒட்டுதல்',
              'சோப் நைஸ் மற்றும் ஷவர் பகுதி நேர்த்தி ஓரங்கள்'
            ]
          : [
              'Zero-leak chemical waterproofing membrane',
              'Anti-skid floor tiles with perfect drainage slope',
              'Full-height wall cladding up to ceiling',
              'Soap niche and shower partition curb edging'
            ]
      },
      {
        id: 'kitchen-tiles',
        title: isTa ? 'கிச்சன் சுவர் & மேடை டைல்ஸ்' : 'Kitchen & Backsplash Tiling',
        icon: '🍳',
        pricingTag: isTa ? 'விலை விபரம் கேட்க' : 'Ask for Quote',
        shortDesc: isTa
          ? 'வெப்பம், எண்ணெய் மற்றும் கறை படியாத சுவர் டைல்ஸ், கிச்சன் மேடை விளிம்பு நேர்த்தி மற்றும் நவீன மொசைக் டிசைன்கள்.'
          : 'Heat, stain, and oil-resistant wall tiles, kitchen counter edge tile finishing, and modern mosaic patterns.',
        deliverables: isTa
          ? [
              'வெப்பம் தாங்கும் பேக்ஸ்பிளாஷ் சுவர் டைல்ஸ் பதித்தல்',
              'மேடை மூலைகளில் பாதுகாப்பான எட்ஜ் ஃபினிஷிங்',
              'எண்ணெய் கறை படியாத எப்பாக்ஸி க்ரௌட்டிங்',
              'நவீன மெட்ரோ மற்றும் மொராக்கன் டிசைன் வேலைகள்'
            ]
          : [
              'Heat-resistant backsplash wall installation',
              'Countertop edge profiling & tile joint sealing',
              'Anti-grease stain-resistant grouting',
              'Custom Moroccan and subway tile patterns'
            ]
      },
      {
        id: 'alteration-demo',
        title: isTa ? 'பழைய டைல்ஸ் இடித்தல் & மாற்று வேலைகள்' : 'Alterations & Demolition',
        icon: '🔨',
        badge: isTa ? '25+ வருட அனுபவம்' : '25+ Yrs Skill',
        pricingTag: isTa ? 'விலை விபரம் கேட்க' : 'Ask for Quote',
        shortDesc: isTa
          ? 'கீழ்தள கான்கிரீட் அல்லது பைப்லைன்களை சேதப்படுத்தாமல் பழைய டைல்ஸ்களை பாதுகாப்பாக உடைத்து அப்புறப்படுத்துதல்.'
          : 'Careful removal of broken or outdated tiles without cracking underlying concrete slabs or pipelines.',
        deliverables: isTa
          ? [
              'கான்கிரீட் சேதமில்லாமல் பழைய டைல்ஸ் உடைத்தல்',
              'கட்டிட கழிவுகளை அப்புறப்படுத்தி இடத்தை சுத்தம் செய்தல்',
              'தரை மட்டத்தை சரிசெய்து புதிய காரை பூசுதல்',
              'உடனடியாக புதிய டைல்ஸ் ஒட்ட தகுந்த தளம் அமைத்தல்'
            ]
          : [
              'Safe mechanical chipping of old tiles',
              'Debris clearing and site cleanup',
              'Floor re-screeding & floor level corrections',
              'Plaster touch-ups ready for immediate new tiles'
            ]
      },
      {
        id: 'tile-repair',
        title: isTa ? 'பொள்ளல் & உடைந்த டைல்ஸ் பழுது பார்த்தல்' : 'Hollow & Cracked Tile Repair',
        icon: '🩹',
        pricingTag: isTa ? 'விலை விபரம் கேட்க' : 'Ask for Quote',
        shortDesc: isTa
          ? 'முழு அறையையும் உடைக்காமல், தளர்ந்த, பொள்ளலான அல்லது உடைந்த டைல்ஸ்களை மட்டும் தனியாக மாற்றி சரிசெய்தல்.'
          : 'Fix loose, popping, or hollow tiles cleanly without demolishing your whole room floor.',
        deliverables: isTa
          ? [
              'அருகிலுள்ள டைல்ஸ்கள் உடையாமல் ஒற்றை டைல்ஸை எடுத்தல்',
              'டைல்ஸ் அடியில் பாலிமர் அட்ஹெசிவ் நிரப்பி உறுதி செய்தல்',
              'பொருத்தமான டைல்ஸ் தேர்வு செய்ய உதவி',
              'மீண்டும் க்ரௌட்டிங் செய்து புத்தம் புதிய தோற்றம் தருதல்'
            ]
          : [
              'Single tile extraction without damaging neighbors',
              'Under-tile polymer adhesive injection',
              'Color-matched tile sourcing assistance',
              'Re-grouting and seal restoration'
            ]
      },
      {
        id: 'terrace-cooling',
        title: isTa ? 'மாடி வெப்பம் தணிக்கும் கூலிங் டைல்ஸ்' : 'Terrace Cooling Weathering Tiles',
        icon: '☀️',
        badge: isTa ? 'கோடை பாதுகாப்பு' : 'Summer Saver',
        pricingTag: isTa ? 'விலை விபரம் கேட்க' : 'Ask for Quote',
        shortDesc: isTa
          ? 'சூரிய வெப்பத்தை பிரதிபலிக்கும் வெள்ளை கூலிங் டைல்ஸ் மூலம் வீட்டின் உட்புற வெப்பத்தை 4°C முதல் 7°C வரை குறைத்தல்.'
          : 'Solar-reflective white tiles & terracotta tiles that reduce top-floor heat by 4°C to 7°C.',
        deliverables: isTa
          ? [
              'மாடி தளத்தில் வாட்டர்ப்ரூஃபிங் பேஸ் அமைத்தல்',
              'சூரிய வெப்பத்தை திருப்பியனுப்பும் கூலிங் டைல்ஸ்',
              'மழைநீர் தேங்காமல் வழியும் வாட்டர்கோஸ் சரிவு',
              'வெப்ப விரிசல் ஏற்படாமல் இடைவெளி பராமரிப்பு'
            ]
          : [
              'Roof terrace waterproof base prep',
              'Heavy-duty solar reflective cooling tiles',
              'Rainwater drainage slope creation',
              'Thermal expansion gap setting'
            ]
      },
      {
        id: 'parking-paver',
        title: isTa ? 'கார் பார்க்கிங் & ஹெவி-டூட்டி டைல்ஸ்' : 'Parking & Exterior Heavy-Duty Tiles',
        icon: '🚗',
        pricingTag: isTa ? 'விலை விபரம் கேட்க' : 'Ask for Quote',
        shortDesc: isTa
          ? 'கனரக வாகன எடை தாங்கும் முழு உடற்பகுதி விட்ரிஃபைட் பார்க்கிங் டைல்ஸ் மற்றும் இன்டர்லாக் பேவர் பிளாக்குகள்.'
          : 'Tough, load-bearing vitrified parking tiles and interlocking pavers built for cars and rain.',
        deliverables: isTa
          ? [
              'கனரக வாகனங்களை தாங்கும் வலுவான சிமெண்ட் காரை படுக்கை',
              'வழக்காத ஆன்டி-ஸ்கிட் கிரிப் மேற்பரப்பு',
              'ரேம்ப் மற்றும் போர்டிகோ டைல்ஸ் வேலைகள்',
              'மழை மற்றும் வெயிலுக்கு தாங்கும் கலவை'
            ]
          : [
              'Heavy vehicle load-bearing base compaction',
              'Anti-skid grip surface installation',
              'Driveway ramp and portico tile work',
              'Weather-resistant mortar binding'
            ]
      },
      {
        id: 'epoxy-grouting',
        title: isTa ? 'வாட்டர்ப்ரூஃப் எப்பாக்ஸி க்ரௌட்டிங்' : 'Waterproof Epoxy Grouting',
        icon: '💎',
        badge: isTa ? '100% வாட்டர்ப்ரூஃப்' : '100% Waterproof',
        pricingTag: isTa ? 'விலை விபரம் கேட்க' : 'Ask for Quote',
        shortDesc: isTa
          ? 'ஒருபோதும் கறுக்காத, பூஞ்சை பிடிக்காத, நீர் கசியாத 2-கூறு ரெசின் எப்பாக்ஸி க்ரௌட்டிங்.'
          : '2-component resin epoxy grout that never turns yellow or black, fully resistant to fungus and water seepage.',
        deliverables: isTa
          ? [
              'டைல்ஸ் இணைப்புகளில் ஆழமாக சுரண்டி சுத்தம் செய்தல்',
              'உயர் அடர்த்தி 2-பகுதி ரெசின் எப்பாக்ஸி இடுதல்',
              'ஆசிட், சோப் ஆயில் மற்றும் தண்ணீருக்கு அழியாத தன்மை',
              '10 வருடங்களுக்கு மேல் உழைக்கும் சீரான நிறம்'
            ]
          : [
              'Joint groove deep raking & vacuuming',
              'High-density 2-part resin epoxy application',
              'Resistant to acids, detergents, and water',
              'Uniform color finish with 10-year durability'
            ]
      }
    ];
  }

  // Localized Gallery Projects
  get galleryProjects(): GalleryProject[] {
    const isTa = this.currentLang === 'ta';
    return [
      {
        id: 'p1',
        title: isTa ? 'பிரீமியம் 2x4 விட்ரிஃபைட் தரை டைல்ஸ்' : 'Luxury 2x4 Vitrified Floor Laying',
        category: 'living',
        location: isTa ? 'அண்ணா நகர், சென்னை' : 'Anna Nagar, Chennai',
        tileType: isTa ? 'ஹை-கிளாஸ் கிளேஸ்டு விட்ரிஃபைட் (GVT)' : 'High-Gloss Glazed Vitrified (GVT)',
        size: isTa ? '1,250 சதுர அடி' : '1,250 sq.ft',
        description: isTa
          ? 'லேசர் மட்டம் பார்க்கப்பட்ட ஹால் மற்றும் டைனிங் அறை, 1mm மெல்லிய மூட்டுகளுடன் பளபளப்பான பினிஷ்.'
          : 'Laser-leveled living and dining room with paper-thin 1mm joints and seamless glossy finish.',
        tag: isTa ? 'புதிய தரை' : 'New Floor'
      },
      {
        id: 'p2',
        title: isTa ? 'நவீன மாஸ்டர் பாத்ரூம் புதுப்பித்தல்' : 'Modern Master Bathroom Renovation',
        category: 'bathrooms',
        location: isTa ? 'போரூர், சென்னை' : 'Porur, Chennai',
        tileType: isTa ? 'ஆன்டி-ஸ்கிட் தரை + 3D டிசைன் சுவர்' : 'Anti-Skid Matte Floor + 3D Feature Wall',
        size: isTa ? '180 சதுர அடி' : '180 sq.ft',
        description: isTa
          ? 'பழைய டைல்ஸ் அப்புறப்படுத்தப்பட்டு, 2 அடுக்கு டாக்டர் ஃபிக்சிட் வாட்டர்ப்ரூஃபிங் மற்றும் சிறந்த வடிகால் சரிவு.'
          : 'Complete strip-down of old tiles, 2-layer Dr. Fixit chemical waterproofing, and stainless steel concealed floor drain slope.',
        tag: isTa ? 'முழு புதுப்பித்தல்' : 'Full Renovation'
      },
      {
        id: 'p3',
        title: isTa ? 'மாடி சூரிய வெப்பம் தணிக்கும் கூலிங் டைல்ஸ்' : 'Terrace Solar Cooling Weathering Tiles',
        category: 'terrace',
        location: isTa ? 'முகப்பேர், சென்னை' : 'Mogappair, Chennai',
        tileType: isTa ? 'வெள்ளை சோலார் கூலிங் டைல்ஸ்' : 'SRI 108 High-Albedo White Cool Tiles',
        size: isTa ? '1,100 சதுர அடி' : '1,100 sq.ft',
        description: isTa
          ? 'தனி வீட்டின் மொட்டை மாடியில் அமைக்கப்பட்ட கூலிங் டைல்ஸ் மூலம் கோடையில் கீழ் அறையின் வெப்பம் 5.5°C குறைந்தது.'
          : 'Laying heat-reflecting tiles on an independent villa terrace roof, reducing top-floor room heat by 5.5°C during summer.',
        tag: isTa ? 'வெப்ப தடுப்பு' : 'Heat Proof'
      },
      {
        id: 'p4',
        title: isTa ? 'மாடுலர் கிச்சன் சப்வே சுவர் டைல்ஸ்' : 'Modular Kitchen Subway Tile Backsplash',
        category: 'kitchen',
        location: isTa ? 'வேளச்சேரி, சென்னை' : 'Velachery, Chennai',
        tileType: isTa ? 'பளபளப்பான சப்வே டைல்ஸ் & எப்பாக்ஸி' : 'Beveled Gloss Subway & Epoxy Grout',
        size: isTa ? '95 சதுர அடி' : '95 sq.ft',
        description: isTa
          ? 'எண்ணெய் கறை படியாத நேர்த்தியான கிச்சன் சுவர் டைல்ஸ், ஸ்டெயின்லெஸ் ஸ்டீல் கார்னர் பீடிங் மற்றும் எப்பாக்ஸி.'
          : 'Durable, grease-resistant backsplash tiling with stainless steel corner beading and heat-proof epoxy grouting.',
        tag: isTa ? 'கிச்சன்' : 'Kitchen'
      },
      {
        id: 'p5',
        title: isTa ? 'கார் பார்க்கிங் ஹெவி-டூட்டி டைல்ஸ்' : 'Vitrified Heavy-Duty Car Parking',
        category: 'commercial',
        location: isTa ? 'அம்பத்தூர், சென்னை' : 'Ambattur, Chennai',
        tileType: isTa ? '16mm ஃபுல் பாடி பார்க்கிங் டைல்ஸ்' : '16mm Full Body Anti-Skid Parking Tiles',
        size: isTa ? '650 சதுர அடி' : '650 sq.ft',
        description: isTa
          ? 'கனரக எஸ்யூவி கார்கள் ஏறி இறங்கினாலும் உடையாத பலமான சிமெண்ட் காரை படுக்கையுடன் அமைக்கப்பட்ட தளம்.'
          : 'Tough exterior vehicle parking with reinforced mortar bed and high-grip skid resistance for heavy SUVs.',
        tag: isTa ? 'பார்க்கிங்' : 'Parking'
      },
      {
        id: 'p6',
        title: isTa ? 'அடுக்குமாடி குடியிருப்பு தரை மாற்றம்' : 'Apartment Hall & Bedroom Tile Alteration',
        category: 'living',
        location: isTa ? 'தாம்பரம், சென்னை' : 'Tambaram, Chennai',
        tileType: isTa ? 'மர வேலைப்பாடு செராமிக் பிளாங்க் டைல்ஸ்' : 'Wood-Plank Ceramic Tiles',
        size: isTa ? '850 சதுர அடி' : '850 sq.ft',
        description: isTa
          ? 'பழைய தரையை அகற்றிவிட்டு, கண்கவர் மரத் தோற்றம் தரும் டைல்ஸ்கள் நேர்த்தியாக பதிக்கப்பட்டது.'
          : 'Old flooring removal and replacement with warm wooden-finish tile planks laid in herringbone pattern.',
        tag: isTa ? 'மாற்று வேலை' : 'Alteration'
      }
    ];
  }

  get filteredGallery(): GalleryProject[] {
    if (this.activeGalleryTab === 'all') {
      return this.galleryProjects;
    }
    return this.galleryProjects.filter(p => p.category === this.activeGalleryTab);
  }

  // Localized Testimonials
  get testimonials(): TestimonialItem[] {
    const isTa = this.currentLang === 'ta';
    if (isTa) {
      return [
        {
          stars: '★★★★★',
          text: '"அண்ணா நகரில் உள்ள எங்கள் 2 BHK வீட்டின் முழு தரை மாற்றத்தை ரம்யா டைல்ஸ் மேஸ்திரி செய்தார். 25 வருட அனுபவம் வேலையில் தெளிவாக தெரிகிறது — ஒரு இடத்தில் கூட தரை ஏற்ற இறக்கம் இல்லை, பாத்ரூமில் தண்ணீர் உடனே வழிகிறது!"',
          author: 'கே. செந்தில் நாதன்',
          project: 'அண்ணா நகர், சென்னை • 850 சதுர அடி தரை & பாத்ரூம்'
        },
        {
          stars: '★★★★★',
          text: '"போரூரில் உள்ள எங்கள் தனி வீட்டின் மாடி கூலிங் டைல்ஸ் மற்றும் பாத்ரூம் புதுப்பிக்கும் பணிக்காக அணுகினோம். மிகவும் கண்ணியமான அணுகுமுறை, சொன்ன நேரத்திற்கு முன்பே முடித்துக்கொடுத்தார். மிகவும் பரிந்துரைக்கிறேன்!"',
          author: 'எம். ராஜேஸ்வரி',
          project: 'போரூர், சென்னை • 1,200 சதுர அடி மாடி கூலிங்'
        },
        {
          stars: '★★★★★',
          text: '"இடைத்தரகர்கள் இல்லாத நேரடி மேஸ்திரி. அம்பத்தூரில் உள்ள என் ஷோரூமில் பெரிய விட்ரிஃபைட் டைல்ஸ் மற்றும் எப்பாக்ஸி க்ரௌட்டிங் வேலையை நேரில் இருந்து சிறப்பாக முடித்தார். பொள்ளல் சத்தமே இல்லை!"',
          author: 'வி. சிவக்குமார்',
          project: 'அம்பத்தூர் தொழிற்பேட்டை • வணிக ஷோரூம்'
        }
      ];
    }

    return [
      {
        stars: '★★★★★',
        text: '"Ramya Tiles contractor did our 2 BHK complete floor alteration in Anna Nagar. The 25+ years experience clearly shows — every tile is completely flat with no uneven edges, and water in the bathroom flows smoothly into the trap without any stagnation!"',
        author: 'K. Senthil Nathan',
        project: 'Anna Nagar, Chennai • 850 sq.ft Floor & Bathrooms'
      },
      {
        stars: '★★★★★',
        text: '"We engaged them for our independent villa terrace cooling tiles and bathroom renovation in Porur. Very polite, completely honest in material estimates, and finished 2 days before the promised deadline. Highly recommended!"',
        author: 'M. Rajeshwari',
        project: 'Porur, Chennai • 1,200 sq.ft Terrace & Remodel'
      },
      {
        stars: '★★★★★',
        text: '"Direct contractor without any middle agents. He personally oversaw the epoxy grouting and large vitrified tiles in my showroom in Ambattur. No hollow sound anywhere. Rock solid work!"',
        author: 'V. Sivakumar',
        project: 'Ambattur Industrial Estate • Commercial Showroom'
      }
    ];
  }

  // Localized FAQs
  get faqs(): FaqItem[] {
    const isTa = this.currentLang === 'ta';
    if (isTa) {
      return [
        {
          question: 'மேஸ்திரிக்கு எத்தனை வருட அனுபவம் உள்ளது?',
          answer: 'எங்கள் தலைமை மேஸ்திரிக்கு சென்னை மற்றும் சுற்றுவட்டார பகுதிகளில் தரை மட்டம், பாத்ரூம் புதுப்பித்தல் மற்றும் டைல்ஸ் பதிப்பதில் 25 ஆண்டுகளுக்கும் மேலான நேரடி கள அனுபவம் உள்ளது.',
          open: true
        },
        {
          question: 'கூலி மட்டும் (Labor Only) அல்லது பொருட்கள் உடனா (Labor + Material)?',
          answer: 'இரண்டு முறைகளிலும் நாங்கள் செய்கிறோம்! நீங்கள் டைல்ஸ் வாங்கினால் நாங்கள் கைவினை கூலி வேலையை மட்டும் செய்யலாம். அல்லது சிமெண்ட், அட்ஹெசிவ் (Roff/Laticrete) மற்றும் எப்பாக்ஸியுடன் சேர்த்தும் எடுத்து செய்கிறோம்.',
          open: false
        },
        {
          question: 'குழாய்களை சேதப்படுத்தாமல் பாத்ரூமை புதுப்பிக்க முடியுமா?',
          answer: 'நிச்சயமாக முடியும். 25 வருட அனுபவத்தில், பழைய டைல்ஸ்களை அடிக்கும்போது உட்புற பிளம்பிங் குழாய்களையோ அல்லது கான்கிரீட்டையோ சேதப்படுத்தாமல் கவனமாக நீக்குவோம். மேலும் புதிய டைல்ஸ் போடுவதற்கு முன் குழாய்களை சோதித்து வாட்டர்ப்ரூஃபிங் செய்வோம்.',
          open: false
        },
        {
          question: 'டைல்ஸுக்கு லேசர் மட்டம் மற்றும் சரிவு ஏன் முக்கியம்?',
          answer: 'சரியான சரிவு இல்லாவிட்டால் தண்ணீர் தேங்கி பாசி பிடிக்கும், வீட்டில் வழுக்கி விழ நேரிடும். நாங்கள் லேசர் கருவி மற்றும் ஸ்பிரிட் லெவல் கொண்டு சரியான சரிவு வைப்பதால் ஒரு துளி தண்ணீர் கூட தேங்காது.',
          open: false
        },
        {
          question: 'இடப்பார்வைக்கு எப்போது வருவீர்கள்? வேலை எப்போது துவங்கும்?',
          answer: 'நீங்கள் அழைத்த 24 மணி நேரத்திற்குள் சென்னைக்குள் நேரில் வந்து அளவீடு செய்வோம். விபரங்கள் பேசி முடிவு செய்த 1 முதல் 2 நாட்களில் வேலையை துவங்குவோம்.',
          open: false
        }
      ];
    }

    return [
      {
        question: 'How many years of experience does the contractor have?',
        answer: 'Our master contractor has more than 25 years of direct hands-on experience in tile laying, floor leveling, bathroom remodeling, and structural alterations across Chennai and surrounding districts.',
        open: true
      },
      {
        question: 'Do you work on Labor-Only basis or Material + Labor?',
        answer: 'We provide both! If you prefer buying your own tiles and sanitary ware, we can provide master craftsmanship labor. Or, we can supply all essential high-grade cement, tile adhesive (Roff/Laticrete), and epoxy grouts together with labor.',
        open: false
      },
      {
        question: 'Can you alter or renovate my bathroom without damaging plumbing pipes?',
        answer: 'Yes, absolutely. With 25+ years in this trade, we know exactly how to chip away old tiles mechanically without hurting concealed plumbing or floor slabs. We also re-test pipe lines and apply dual-coat waterproofing before laying new tiles.',
        open: false
      },
      {
        question: 'Why is laser leveling and slope crucial for tiles?',
        answer: 'Improper slopes cause water stagnation, slippery algae, and bathroom seepage into bedrooms. We use precise laser levels and spirit levels so water flows directly into the drain trap with zero puddles.',
        open: false
      },
      {
        question: 'How quickly can you start after inspection?',
        answer: 'We usually conduct site visits within 24 hours in Chennai. Once the quote is confirmed, we can mobilize our experienced team within 1 to 2 business days.',
        open: false
      }
    ];
  }

  toggleFaq(index: number): void {
    this.faqs[index].open = !this.faqs[index].open;
  }

  // Contact / Site Visit Form
  bookingData = {
    name: '',
    phone: '',
    location: '',
    service: 'New Floor Tile Laying',
    area: '',
    message: ''
  };

  bookingSubmitted = false;

  submitBooking(): void {
    if (!this.bookingData.name || !this.bookingData.phone) {
      alert(this.currentLang === 'ta' ? 'தயவுசெய்து உங்கள் பெயர் மற்றும் அலைபேசி எண்ணை உள்ளிடவும்.' : 'Please enter your Name and Phone Number.');
      return;
    }

    const isTa = this.currentLang === 'ta';
    const message = isTa
      ? `வணக்கம் ரம்யா டைல்ஸ் மேஸ்திரி, எனது இடப்பார்வை / பணி ஆலோசனைக்கான விபரம்:
- *பெயர்*: ${this.bookingData.name}
- *அலைபேசி*: ${this.bookingData.phone}
- *பகுதி*: ${this.bookingData.location || 'சென்னை'}
- *வேலை*: ${this.bookingData.service}
- *பரப்பளவு*: ${this.bookingData.area || 'அளக்க வேண்டும்'} சதுர அடி
- *விபரம்*: ${this.bookingData.message || 'நேரில் வந்து பார்க்கவும்.'}`
      : `Hello Ramya Tiles Contractor, I would like to book a site visit / consultation:
- *Name*: ${this.bookingData.name}
- *Phone*: ${this.bookingData.phone}
- *Location*: ${this.bookingData.location || 'Chennai'}
- *Service*: ${this.bookingData.service}
- *Approx Area*: ${this.bookingData.area || 'To be measured'} sq.ft
- *Requirement*: ${this.bookingData.message || 'Please call me back.'}`;

    const url = `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    this.bookingSubmitted = true;
  }
}
