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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Business Profile Info (Easily editable by user)
  readonly businessName = 'Ramya Tiles Work Contractor';
  readonly founderTitle = 'Master Tile Laying Contractor';
  readonly experienceYears = '25+';
  readonly phone = '+919876543210';
  readonly displayPhone = '+91 98765 43210';
  readonly whatsappNumber = '919876543210';
  readonly serviceLocation = 'Chennai, Tamil Nadu (All Areas Covered)';
  readonly email = 'contact@ramyatiles.com';

  // Navigation State
  mobileMenuOpen = false;

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.mobileMenuOpen = false;
  }

  // Services Catalog
  services: ServiceItem[] = [
    {
      id: 'new-floor',
      title: 'New Floor Tile Laying',
      icon: '🏠',
      badge: 'High Demand',
      popular: true,
      pricingTag: 'Ask for Quote',
      shortDesc: 'Vitrified, ceramic, Italian marble-finish, and 2x4 / 4x6 ft large slab laying with laser leveling.',
      deliverables: [
        'Floor sub-base cleaning and laser leveling',
        'Even joint spacing with zero hollow spots',
        'Custom edge skirting and border alignment',
        'Final machine cleaning and buffing'
      ]
    },
    {
      id: 'bath-reno',
      title: 'Bathroom Renovation & Remodel',
      icon: '🚿',
      badge: 'Specialist',
      popular: true,
      pricingTag: 'Ask for Quote',
      shortDesc: 'Complete bathroom overhaul: old tile removal, double chemical waterproofing, and anti-skid safety tiles.',
      deliverables: [
        'Zero-leak chemical waterproofing membrane',
        'Anti-skid floor tiles with perfect drainage slope',
        'Full-height wall cladding up to ceiling',
        'Soap niche and shower partition curb edging'
      ]
    },
    {
      id: 'kitchen-tiles',
      title: 'Kitchen & Backsplash Tiling',
      icon: '🍳',
      pricingTag: 'Ask for Quote',
      shortDesc: 'Heat, stain, and oil-resistant wall tiles, granite counter finishing, and modern mosaic patterns.',
      deliverables: [
        'Heat-resistant backsplash wall installation',
        'Countertop edge profiling & tile joint sealing',
        'Anti-grease stain-resistant grouting',
        'Custom Moroccan and subway tile patterns'
      ]
    },
    {
      id: 'alteration-demo',
      title: 'Alterations & Demolition',
      icon: '🔨',
      badge: '25+ Yrs Skill',
      pricingTag: 'Ask for Quote',
      shortDesc: 'Careful removal of broken or outdated tiles without cracking underlying concrete slabs or pipelines.',
      deliverables: [
        'Safe mechanical chipping of old tiles',
        'Debris clearing and site cleanup',
        'Floor re-screeding & floor level corrections',
        'Plaster touch-ups ready for immediate new tiles'
      ]
    },
    {
      id: 'tile-repair',
      title: 'Hollow & Cracked Tile Repair',
      icon: '🩹',
      pricingTag: 'Ask for Quote',
      shortDesc: 'Fix loose, popping, or hollow tiles cleanly without demolishing your whole room floor.',
      deliverables: [
        'Single tile extraction without damaging neighbors',
        'Under-tile polymer adhesive injection',
        'Color-matched tile sourcing assistance',
        'Re-grouting and seal restoration'
      ]
    },
    {
      id: 'terrace-cooling',
      title: 'Terrace Cooling Weathering Tiles',
      icon: '☀️',
      badge: 'Summer Saver',
      pricingTag: 'Ask for Quote',
      shortDesc: 'Solar-reflective white tiles & terracotta tiles that reduce top-floor heat by 4°C to 7°C.',
      deliverables: [
        'Roof terrace waterproof base prep',
        'Heavy-duty solar reflective cooling tiles',
        'Rainwater drainage slope creation',
        'Thermal expansion gap setting'
      ]
    },
    {
      id: 'parking-paver',
      title: 'Parking & Exterior Heavy-Duty Tiles',
      icon: '🚗',
      pricingTag: 'Ask for Quote',
      shortDesc: 'Tough, load-bearing vitrified parking tiles and interlocking pavers built for cars and rain.',
      deliverables: [
        'Heavy vehicle load-bearing base compaction',
        'Anti-skid grip surface installation',
        'Driveway ramp and portico tile work',
        'Weather-resistant mortar binding'
      ]
    },
    {
      id: 'epoxy-grouting',
      title: 'Waterproof Epoxy Grouting',
      icon: '💎',
      badge: '100% Waterproof',
      pricingTag: 'Ask for Quote',
      shortDesc: '2-component resin epoxy grout that never turns yellow or black, fully resistant to fungus and water seepage.',
      deliverables: [
        'Joint groove deep raking & vacuuming',
        'High-density 2-part resin epoxy application',
        'Resistant to acids, detergents, and water',
        'Uniform color finish with 10-year durability'
      ]
    }
  ];

  // Interactive Quote Requester Model (Varies Case by Case)
  calcService = 'floor';
  calcArea: number = 500;
  calcScope = 'labor'; // 'labor' or 'labor-material'
  calcDemolition = false;
  calcWaterproofing = false;
  calcEpoxyGrout = false;

  get estimatedDays(): string {
    const area = Number(this.calcArea) || 0;
    if (area <= 200) return '1 - 2 Days';
    if (area <= 500) return '2 - 4 Days';
    if (area <= 1000) return '4 - 7 Days';
    return '7 - 12 Days';
  }

  getServiceLabel(type: string): string {
    switch (type) {
      case 'floor': return 'New Floor Tiling';
      case 'bathroom': return 'Bathroom Renovation & Tiling';
      case 'kitchen': return 'Kitchen Wall & Floor Tiling';
      case 'terrace': return 'Terrace Cooling Tiles';
      case 'parking': return 'Parking & Heavy Duty Tiling';
      case 'repair': return 'Alteration & Tile Repair';
      default: return 'General Tile Laying';
    }
  }

  setAreaPreset(area: number): void {
    this.calcArea = area;
  }

  generateCalculatorWhatsAppUrl(): string {
    const serviceName = this.getServiceLabel(this.calcService);
    const scopeName = this.calcScope === 'labor' ? 'Labor Only' : 'Labor + Cement/Adhesive Materials';
    const addonsList: string[] = [];
    if (this.calcDemolition) addonsList.push('Old Tile Demolition');
    if (this.calcWaterproofing) addonsList.push('Double Waterproofing');
    if (this.calcEpoxyGrout) addonsList.push('Epoxy Grouting');

    const addonsText = addonsList.length > 0 ? addonsList.join(', ') : 'None';

    const message = `Vanakkam Sir, I would like to get a quote for my tile project:
- *Service*: ${serviceName}
- *Approx Area*: ${this.calcArea} sq.ft
- *Work Scope*: ${scopeName}
- *Requirements*: ${addonsText}
- *Estimated Duration*: ~${this.estimatedDays}

Please let me know your price estimate or when you can inspect the site for confirmation.`;

    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(message)}`;
  }

  // Portfolio Projects
  activeGalleryTab: 'all' | 'bathrooms' | 'living' | 'kitchen' | 'terrace' | 'commercial' = 'all';

  galleryProjects: GalleryProject[] = [
    {
      id: 'p1',
      title: 'Luxury 2x4 Vitrified Floor Laying',
      category: 'living',
      location: 'Anna Nagar, Chennai',
      tileType: 'High-Gloss Glazed Vitrified (GVT)',
      size: '1,250 sq.ft',
      description: 'Laser-leveled living and dining room with paper-thin 1mm joints and seamless bookmatched marble veins.',
      tag: 'New Floor'
    },
    {
      id: 'p2',
      title: 'Modern Master Bathroom Renovation',
      category: 'bathrooms',
      location: 'Porur, Chennai',
      tileType: 'Anti-Skid Matte Floor + 3D Feature Wall',
      size: '180 sq.ft',
      description: 'Complete strip-down of old tiles, 2-layer Dr. Fixit chemical waterproofing, and stainless steel concealed floor drain slope.',
      tag: 'Full Renovation'
    },
    {
      id: 'p3',
      title: 'Terrace Solar Cooling Weathering Tiles',
      category: 'terrace',
      location: 'Mogappair, Chennai',
      tileType: 'SRI 108 High-Albedo White Cool Tiles',
      size: '1,100 sq.ft',
      description: 'Laying heat-reflecting tiles on an independent villa terrace roof, reducing top-floor room heat by 5.5°C during summer.',
      tag: 'Heat Proof'
    },
    {
      id: 'p4',
      title: 'Modular Kitchen Subway Tile Backsplash',
      category: 'kitchen',
      location: 'Velachery, Chennai',
      tileType: 'Beveled Gloss Subway & Epoxy Grout',
      size: '95 sq.ft',
      description: 'Durable, grease-resistant backsplash tiling with stainless steel corner beading and heat-proof epoxy grouting.',
      tag: 'Kitchen'
    },
    {
      id: 'p5',
      title: 'Vitrified Heavy-Duty Car Parking',
      category: 'commercial',
      location: 'Ambattur, Chennai',
      tileType: '16mm Full Body Anti-Skid Parking Tiles',
      size: '650 sq.ft',
      description: 'Tough exterior vehicle parking with reinforced mortar bed and high-grip skid resistance for heavy SUVs.',
      tag: 'Parking'
    },
    {
      id: 'p6',
      title: 'Apartment Hall & Bedroom Tile Alteration',
      category: 'living',
      location: 'Tambaram, Chennai',
      tileType: 'Wood-Plank Ceramic Tiles',
      size: '850 sq.ft',
      description: 'Old flooring removal and replacement with warm wooden-finish tile planks laid in herringbone pattern.',
      tag: 'Alteration'
    }
  ];

  get filteredGallery(): GalleryProject[] {
    if (this.activeGalleryTab === 'all') {
      return this.galleryProjects;
    }
    return this.galleryProjects.filter(p => p.category === this.activeGalleryTab);
  }

  setGalleryTab(tab: 'all' | 'bathrooms' | 'living' | 'kitchen' | 'terrace' | 'commercial'): void {
    this.activeGalleryTab = tab;
  }

  // FAQs
  faqs: FaqItem[] = [
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
      alert('Please enter your Name and Phone Number.');
      return;
    }

    const message = `Hello Ramya Tiles Contractor, I would like to book a site visit / consultation:
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
